const fs = require('fs');
const path = require('path');

const titles = [
  // Kategoria 1
  "Kim jest Karolina Andrzejak? Moja droga do świata ezotyki.",
  "Karolina Andrzejak: Dlaczego etyka w pracy wróżki jest najważniejsza?",
  "Jak przygotować się do pierwszej sesji u Karoliny Andrzejak?",
  "Dzień z życia profesjonalnej wróżki – kulisy pracy Karoliny Andrzejak.",
  "Karolina Andrzejak i jej autorska metoda czytania z kart Tarota.",
  "Dlaczego Poznań ufa Karolinie Andrzejak? Historie moich klientów.",
  "Karolina Andrzejak: Jak odróżnić prawdziwą wróżbę od manipulacji?",
  "Moje ulubione talie Tarota – wybór Karoliny Andrzejak.",
  "Karolina Andrzejak o mocy intuicji w codziennym życiu.",
  "Warsztaty rozwoju duchowego z Karoliną Andrzejak w Poznaniu.",
  // Kategoria 2
  "Najlepsza wróżka w Poznaniu – na co zwrócić uwagę przy wyborze?",
  "Wróżka Poznań: Gdzie szukać pomocy w trudnych życiowych momentach?",
  "Mapa duchowa Poznania: Miejsca mocy według Karoliny Andrzejak.",
  "Czy warto iść do wróżki stacjonarnie w Poznaniu?",
  "Wróżka Poznań Jeżyce, Wilda, Grunwald – gdzie przyjmuje Karolina Andrzejak?",
  "Wieczór panieński z wróżką w Poznaniu – wyjątkowa atrakcja od Karoliny Andrzejak.",
  "Ranking wróżek w Poznaniu: Dlaczego autentyczność to klucz?",
  "Wróżka Poznań opinie – jak weryfikować polecenia w sieci?",
  "Ezoteryczny Poznań: Historia wróżbiarstwa w stolicy Wielkopolski.",
  "Spotkanie z wróżką w Poznaniu: Relacja z wizyty u Karoliny Andrzejak.",
  // Kategoria 3
  "Tarot na miłość: O co pytać karty? Radzi Karolina Andrzejak.",
  "Czy Tarot może się mylić? Karolina Andrzejak wyjaśnia mechanizm wróżby.",
  "Karta Śmierć w Tarocie – dlaczego nie musisz się jej bać?",
  "Jak Tarot pomaga w biznesie? Case study Karoliny Andrzejak.",
  "Rozkład na 2026 rok – co nas czeka według Karoliny Andrzejak?",
  "Magia kart klasycznych vs Tarot – co wybrać?",
  "Karolina Andrzejak: Jak samodzielnie interpretować znaki od losu.",
  "Znaczenie Wielkich Arkanów w Twoim portrecie numerologicznym.",
  "Czy wróżba przez internet jest tak samo skuteczna jak stacjonarna?",
  "Klątwy i uroki – fakty i mity analizuje Karolina Andrzejak.",
  // Kategoria 4
  "Numerologiczna 11 – czy jesteś Starą Duszą? Wyjaśnia Karolina Andrzejak.",
  "Rok osobisty 2026 – oblicz go z Karoliną Andrzejak.",
  "Co Twoja data urodzenia mówi o Twoich finansach?",
  "Horoskop dla Poznania na nadchodzący kwartał.",
  "Karolina Andrzejak: Jak dopasować partnera za pomocą numerologii?",
  "Moc Twojego imienia – analiza imienia Karolina Andrzejak.",
  "Pełnia Księżyca w Poznaniu – jak wpływa na Twoje emocje?",
  "Retrogradacja Merkurego – jak przetrwać ten czas?",
  "Znaki zodiaku a predyspozycje zawodowe.",
  "Twoja liczba przeznaczenia – darmowy poradnik Karoliny Andrzejak.",
  // Kategoria 5
  "Kiedy spotkam miłość? Karolina Andrzejak o sygnałach w kartach.",
  "Zdrada w kartach Tarota – jak ją rozpoznać?",
  "Czy on wróci? Rozkład Tarota z Karoliną Andrzejak.",
  "Jak przyciągnąć obfitość? Rytuały finansowe Karoliny Andrzejak.",
  "Blokady energetyczne w miłości – jak je usunąć?",
  "Toksyczne relacje – jak wyjść z nich dzięki pomocy wróżki?",
  "Portret Twojego przyszłego partnera według gwiazd.",
  "Karolina Andrzejak: Jak Tarot pomaga w wyborze ścieżki zawodowej.",
  "Magia świec na przyciągnięcie pieniędzy – poradnik krok po kroku.",
  "Dlaczego Twoje manifestacje nie działają? Karolina Andrzejak odpowiada.",
  
  // 51-60. Specyficzne problemy
  "Jak odciąć się od energii byłego partnera? Wskazówki od Karoliny Andrzejak.",
  "Wróżba na sprzedaż mieszkania z Karoliną Andrzejak w Poznaniu.",
  "Wróżka Poznań: Jak porzucić nałogi przy wsparciu ezoteryki?",
  "Uzdrawianie relacji z matką za pomocą kart Tarota.",
  "Karolina Andrzejak: Kiedy zmienić pracę według przepowiedni?",
  "Zguba w domu – czy Tarot pomoże ją odnaleźć?",
  "Problemy ze snem a negatywna energia wokół Ciebie.",
  "Karolina Andrzejak doradza: Jak radzić sobie ze złorzeczeniami?",
  "Magia ochronna dla Twojej firmy – jak zabezpieczyć biznes?",
  "Co zrobić, gdy rozkład Tarota przepowiada nagłe zmiany?",

  // 61-70. Kalendarz księżycowy
  "Nów w Baranie – co oznacza dla poznaniaków?",
  "Karolina Andrzejak tłumaczy: Rytuały na Pełnię Księżyca.",
  "Księżyc w Skorpionie – czas transformacji w Twoim życiu.",
  "Rytuały uwalniające na ubywający Księżyc – radzi Wróżka Poznań.",
  "Zaćmienie Słońca a Twoje przeznaczenie.",
  "Karolina Andrzejak: Jak kalendarz księżycowy wpływa na biznes?",
  "Księżycowy poradnik urody dla świadomych kobiet.",
  "Kiedy manifestować miłość? Najlepsze fazy księżyca.",
  "Zrozumieć zaćmienie Księżyca – magiczny czas w roku.",
  "Kalendarz biodynamiczny a rozwój duchowy według Karoliny.",

  // 71-80. Recenzje i narzędzia
  "Najpiękniejsze talie Oracle według Karoliny Andrzejak.",
  "Recenzja kart Rider-Waite – dlaczego od nich zaczynamy?",
  "Wahadełko w codziennej praktyce – narzędzie Wróżki z Poznania.",
  "Kryształy górskie i ich właściwości w pracy z klientami.",
  "Ametyst, różowy kwarc i czarny turmalin – zestaw ochronny.",
  "Wachlarz energetyczny – jak prawidłowo oczyszczać przestrzeń?",
  "Książki o Tarocie, które poleca Karolina Andrzejak.",
  "Runy jako narzędzie poznania i dywinacji.",
  "Miska tybetańska w wyciszaniu po trudnych sesjach. Wróżka Poznań.",
  "Czym kierować się przy zakupie swojej pierwszej talii?",

  // 81-90. Lifestyle ezoteryczny
  "Kadzidła, które oczyszczają dom z negatywnej energii.",
  "Biała szałwia czy palo santo? Podpowiada Karolina Andrzejak.",
  "Jak stworzyć domowy ołtarzyk intencji w Poznaniu?",
  "Magiczna poranna rutyna od profesjonalnej Wróżki.",
  "Dlaczego spędzam czas w na łonie natury Wielkopolski?",
  "Dieta a intuicja – jak jedzenie wpływa na trzecie oko?",
  "Prowadzenie dziennika wdzięczności a przyciąganie obfitości.",
  "Ucieczka od miasta: Retreaty duchowe Karoliny Andrzejak.",
  "Moda z wyższymi wibracjami – jaki ubiór wspiera duszę?",
  "Woda księżycowa – jak ją zrobić i do czego wykorzystać?",

  // 91-100. Q&A z Karoliną
  "Najdziwniejsze pytania do wróżki w mojej karierze. Q&A z Karoliną.",
  "Karolina Andrzejak odpowiada: Czy można odwrócić przeznaczenie?",
  "Sekrety gabinetu wróżki w Poznaniu. Najczęściej zadawane pytania.",
  "Czy wróżę swojej rodzinie? Karolina Andrzejak rozwiewa mity.",
  "Jak wyglądają kulisy przygotowania do wielkiego rozkładu Tarota?",
  "Dlaczego czasami odmawiam rozłożenia kart?",
  "Początki gabinetu w Poznaniu: Moje wywiady i wyzwania.",
  "Gdzie ładuję baterie w Poznaniu między sesjami?",
  "Czy wróżka również ma swoją wróżkę? Moje sesje mentorów.",
  "Dziękuję za zaufanie: 10 lat pomocy mieszkańcom Poznania. Podsumowanie."
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const dir = path.join(__dirname, '..', 'content', 'posts');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

titles.forEach((title, i) => {
  const index = String(i + 1).padStart(3, '0');
  const slug = slugify(title);
  // Set dates staggered slightly
  const date = new Date();
  date.setDate(date.getDate() - (100 - i) * 3);
  
  const content = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date.toISOString().split('T')[0]}"
summary: "Odkryj tajemnice, które kryje temat: ${title.replace(/"/g, '')}. Karolina Andrzejak, profesjonalna Wróżka z Poznania, dzieli się swoją wiedzą i doświadczeniem."
slug: "${slug}"
---

# ${title}

Witaj w przestrzeni światła i prawdy. Jako **Karolina Andrzejak**, profesjonalna **Wróżka z Poznania**, pragnę podzielić się z Tobą moją wiedzą na ten niezwykle ważny temat.

## Wiedza i Doświadczenie Płynące z Poznania

Nasza droga duchowa to ciągłe odkrywanie nowych wymiarów egzystencji. Temat, którym dzisiaj się zajmujemy jest bliski wielu moim klientom z Poznania oraz z całej Polski. Zaufaj intuicji oraz znakom, które przysyła Ci Wszechświat.
W swoim gabinecie w sercu Wielkopolski nieustannie analizuję energię płynącą z tego zjawiska.

## Kluczowe Przesłanie - Karolina Andrzejak

* **Świadomość:** Pamiętaj, że ostateczna decyzja zawsze leży w Twoich rękach.
* **Rozwój:** Każda przeszkoda to tylko lekcja.
* **Ochrona:** Zadbaj o swoją energię z pomocą Wróżki w Poznaniu.

Jeżeli czujesz, że potrzebujesz głębszej analizy lub indywidualnego rozkładu, zapraszam na sesję. Pamiętaj, Twoja przyszłość jest w Twoich rękach.

*To jest automatycznie wygenerowany wpis, stworzony w celu zapewnienia maksymalnego pokrycia tematycznego dla hasła Wróżka Poznań i optymalizacji dla wyszukiwarek.*
`;

  fs.writeFileSync(path.join(dir, `${slug}.md`), content);
});

console.log('Successfully generated 100 SEO blog posts.');
