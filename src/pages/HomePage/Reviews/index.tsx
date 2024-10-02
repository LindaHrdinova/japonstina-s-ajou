import './styleReview.css';

const rewiewsList: ReviewListType[] = [
  {
    author: 'Julča Tichá',
    score: 5,
    text: 'Skvělé skupinové lekce! Vše jasně, srozumitelně a s trpělivostí vysvětlené, takže jsem se v problematice japonského jazyka dokázala neztratit, a to i jako naprostý začátečník. Lekce jsou vždy přizpůsobeny pěkně na míru pokroku skupiny a materiály k lekcím jsou skvěle zpracované a graficky velmi nápomocné k zapamatování. Ačkoliv mám zkušenosti jen ze skupinových lekcí, tak jsem rozhodně nebyla ochuzena o individuální konzultace řešící mé dotazy, úkoly apod. . . . Prostě supr a mohu jen doporučit 😊',
  },
  {
    author: 'Lukáš Uliarczyk',
    score: 5,
    text: 'Ája je velmi příjemná a skvělá mentorka. Mé znalosti japonštiny poskočily exponenciálně po začátku lekcí s Ájou. Úroveň přiblíží tvé zdatnosti a velmi důkladně vysvětluje jak jazyk samotný a jeho náležitosti, tak i kulturní zvyky, které jsou spjaté s Japonskem a jsou důležitou součástí jazyka. Zvyky a správné dekórum jsou v Japonsku stejně důležité jako správná gramatika. Těším se na další lekce. またね。🇯🇵',
  },
  {
    author: 'Blanka Zímová',
    score: 5,
    text: 'Každá lekce s Ájou mi vždy zvedne náladu. Je na ní vidět, že ji učení japonštiny a japonština samotná velmi baví a svoji skvělou náladu vždy přenese i na mě. Hodiny jsou vždy skvěle uzpůsobené přímo danému člověku, dávají smysl a vše se dá díky Áje skvěle pochopit. Učivo vám vysvětlí bezkonkurenčně jasně a má i spoustu zkušeností a znalostí reálií a historie, takže všechna témata obohatí i její znalosti a postřehy. Učí věci, které člověk opravdu využije. 🌺 Je taky velmi trpělivá a na každou lekci se moc těším 🌞',
  },
  {
    author: 'Hepy Kitsune Fowa',
    score: 5,
    text: 'Aja je naprosto suprová. Učím se jp už druhým rokem a jsem naprosto spokojený. Jak předtím s individualnimy kurzy tak teď s připraveným týdenním materiálem na samostudium kde máme spousty úkolů když něco nevím tak je mi to skoro obratem vysvětleno. Videa s novou látkou jsou srozumitelné a i výborné na opakování. ❤ naprostá spokojenost!',
  },
  {
    author: 'Anna Luňáková',
    score: 5,
    text: 'Pokoušela jsem se dvakrát neúspěšně o zkoušku N5 sama, ale po několika týdnech přípravy s Ájou jsem ji zvládla jako nic a těším se na N4! Ája je prostě skvělý učitel, kurzy jsou jako na míru, je k dispozici hromada materiálů pro samostatné studium, ale hlavně: hodiny s ní jsou příjemné, „lidské“ a vždycky mi zvednou náladu 🦜!',
  },
  {
    author: 'Lukáš Buřič',
    score: 5,
    text: 'Lekce s Ájou jsou část týdne, na kterou se vždy nejvíc těším. Díky individuálnímu přístupu a lekcím ušitým na míru, skvělým zápiskům, které Ája sama v průběhu lekce dělá, a zábavným aktivitám cítím neustálý pokrok. Jen škoda, že hodina vždycky tak rychle uteče! Už jsem se učil spoustu jazyků se spoustou učitelů, a Ája patří jednoznačně k těm nejlepším.',
  },
];

type ReviewListType = {
  author: string;
  score: number;
  text: string;
};

export const Reviews: React.FC = () => {
  return (
    <>
      <h2>Recenze</h2>
      <div className="revievewList">
        {rewiewsList.map((review) => {
          console.log(review.author);
          console.log(12);
          return (
            <div className="review textBox" key={review.author}>
              <h3>{review.author}</h3>
              <span>
                {Array.from({ length: review.score }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </span>
              <div className="revievewList__text">{review.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
