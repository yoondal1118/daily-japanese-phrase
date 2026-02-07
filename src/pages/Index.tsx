import { useState, useCallback } from "react";
import { quotes, Quote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const getRandomQuote = useCallback((excludeQuote?: Quote | null): Quote => {
    let availableQuotes = quotes;
    
    if (excludeQuote) {
      availableQuotes = quotes.filter(
        (q) => q.jp_original !== excludeQuote.jp_original
      );
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    return availableQuotes[randomIndex];
  }, []);

  const handleTodaysQuote = () => {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
    setHasStarted(true);
  };

  const handleAnotherQuote = () => {
    const newQuote = getRandomQuote(currentQuote);
    setCurrentQuote(newQuote);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      <Card className="w-full max-w-2xl border-2 border-primary/30 bg-card/80 shadow-xl backdrop-blur-sm">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center text-center">
            {/* Quote Display Area */}
            {currentQuote && (
              <div className="w-full animate-fade-in" style={{ minHeight: '380px' }}>
                {/* Quote Section - 메인 콘텐츠 강조 */}
                <div className="mb-4 flex min-h-[180px] items-center justify-center rounded-xl bg-secondary/50 px-6 py-8 sm:px-8 sm:py-10">
                  <div className="space-y-4" style={{ fontSize: '20px', lineHeight: '1.8' }}>
                    {/* Japanese Original */}
                    <p className="text-foreground">{currentQuote.jp_original}</p>
                    
                    {/* Yomigana */}
                    <p className="text-muted-foreground">{currentQuote.jp_yomigana}</p>
                    
                    {/* Korean Meaning - Bold */}
                    <p className="font-bold text-foreground">{currentQuote.ko_meaning}</p>
                  </div>
                </div>

                {/* Separator */}
                <Separator className="my-4 bg-foreground/10" />

                {/* Kanji Notes Section - 서브 콘텐츠 */}
                <div className="mx-auto max-w-md rounded-xl bg-muted/20 px-4 py-4" style={{ minHeight: '120px' }}>
                  <h3 className="mb-3 text-center font-semibold text-foreground" style={{ fontSize: '16px' }}>
                    한자/단어 해설
                  </h3>
                  <div 
                    className="flex justify-center"
                    style={{ maxHeight: '160px', overflowY: 'auto' }}
                  >
                    <ul className="space-y-1 text-left" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                      {currentQuote.kanji_notes.map((note, index) => (
                        <li key={index}>
                          <span className="font-semibold text-foreground">{note.word}</span>
                          <span className="text-muted-foreground"> : </span>
                          <span className="text-foreground">{note.meaning}</span>
                          <span className="text-muted-foreground"> / </span>
                          <span className="text-primary">{note.reading}</span>
                          <span className="text-muted-foreground"> / </span>
                          <span className="text-foreground">{note.korean_pron}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Spacer when no quote */}
            {!currentQuote && (
              <div className="mb-8 py-12 text-center">
                <p className="text-xl text-muted-foreground">오늘의 일본어 명언을 확인해보세요!</p>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              {!hasStarted ? (
                <Button
                  onClick={handleTodaysQuote}
                  variant="default"
                  size="lg"
                  className="quote-button min-w-[200px] rounded-2xl px-10 py-7 text-base font-medium"
                >
                  오늘의 일본어
                </Button>
              ) : (
                <Button
                  onClick={handleAnotherQuote}
                  variant="outline"
                  size="lg"
                  className="quote-button min-w-[200px] rounded-2xl border-2 px-10 py-7 text-base font-medium hover:bg-secondary"
                >
                  다른 글귀 보기
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>오늘의 일본어 한줄</p>
      </footer>
    </main>
  );
};

export default Index;
