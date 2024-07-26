import * as React from 'react';
import './termsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      <div>
        <p>
          <strong>Základní údaje</strong>
        </p>
        <p>Jméno</p>
        <p>IČO: ičo číslo</p>
        <p>Sídlo: adresa</p>
      </div>
      <div>
        <p>Nejsem plátce DPH.</p>
      </div>
      <div>
        <p>E-mail: japonstina.aja@gmail.com</p>
        <p>Telefon: tel. číslo</p>
      </div>
      <p>
        Na uvedeném e-mailu jsem vám k dispozici pro běžnou komunikaci i pro
        případné vyřizování podnětů a reklamací. V dalším textu vystupuji už jen
        jako „Prodávající“.
      </p>
      <h3>Obchodní podmínky</h3>

      <h4>ÚVODNÍ USTANOVENÍ</h4>
      <ol className="tac__oList">
        <li>
          Tyto všeobecné obchodní podmínky (dále jen „VOP“) platí pro služby
          prodávajícího, kterým je Alena Smutná, uzavřených s kupujícím
          prostřednictvím e-mailu či telefonního kontaktu mezi kupujícím a
          prodávajícím.
        </li>
        <li>
          Tyto obchodní podmínky blíže vymezují a upřesňují práva a povinnosti
          kupujících (zákazníka) a prodávajícího, kterým je podnikající fyzická
          osoba. V otázkách neupravených kupní smlouvou a těmito obchodními
          podmínkami se tento vztah řídí občanským zákoníkem a právními předpisy
          na ochranu spotřebitele. Ustanovení obchodních podmínek jsou nedílnou
          součástí kupní smlouvy.
        </li>
      </ol>

      <h4>OBJEDNÁVKA</h4>
      <ol className="tac__oList">
        <li>
          Označení produktu, popis jeho hlavních vlastností a cena jsou uvedeny
          na stránkách jednotlivých služeb. Nejsem plátce DPH. Cena je dále vždy
          uvedena i na faktuře.
        </li>
        <li>
          Objednávka jazykových služeb vždy obsahuje informace o zákazníkovi,
          objednávané službě, ceně, možnostech platby. Jsou přijímány platby
          pouze bankovním převodem.
        </li>
        <li>
          Smluvní vztah mezi prodávajícím a zákazníkem vzniká zadáním objednávky
          na jazykové služby (nikoliv až po potvrzení objednávky). Od tohoto
          momentu vznikají mezi kupujícím a prodávajícím vzájemná práva a
          povinnosti, jež jsou vymezeny kupní smlouvou a těmito obchodními
          podmínkami. Podáním objednávky zákazník stvrzuje, že se seznámil s
          těmito obchodními podmínkami a že s nimi souhlasí. Podmínkou platné
          objednávky kurzů japonštiny je dodání fakturačních údajů (adresa
          kupujícího a počet smluvených lekcí japonštiny) prodávajícímu.
        </li>
        <li>
          Informace o jednotlivých technických krocích vedoucí k uzavření
          smlouvy jsou patrné z procesu objednávání a zákazník má možnost před
          vlastním odesláním objednávky smlouvu zkontrolovat a případně opravit.
          Údaje uvedené v objednávce jsou prodávajícím považovány za správné.
        </li>
        <li>
          Zákazník souhlasí s použitím prostředků komunikace na dálku při
          uzavírání smlouvy.
        </li>
        <li>
          Smlouva je uzavírána v českém jazyce. Smlouva, resp. příslušný daňový
          doklad, bude uložen v elektronickém archivu prodávajícího po dobu 5
          let od jejího uzavření za účelem jejího úspěšného splnění a není
          přístupná třetím nezúčastněným stranám.
        </li>
        <li>
          Prodávající je povinen poskytnout či dodat službu, kterou si zákazník
          objednal a zákazník se zavazuje službu převzít a zaplatit
          prodávajícímu kupní cenu. Povinnosti dodat službu je prodávající
          zbaven v případě plně obsazené kapacity lekcí japonského jazyka, o
          čemž bude zákazník předem informován.
        </li>
      </ol>

      <h4>CENA, DAŇOVÝ DOKLAD</h4>
      <ol className="tac__oList">
        <li>
          Cena produktů, zboží a služeb je uvedena na vybraném rozhraní
          prodávajícího. Cena je vždy uvedena i na faktuře.
        </li>
        <li>
          Faktura: Prodávající vystaví ohledně plateb prováděných na základě
          smlouvy zákazníkovi fakturu, kterou mu odešle do jeho e-mailové
          schránky a která po zaplacení slouží jako doklad o zakoupení produktu
          či služby. Prodávající není plátcem DPH.
        </li>
      </ol>

      <h4>ZPŮSOB A FORMA PLATBY</h4>
      <ol className="tac__oList">
        <li>
          Způsob a možnosti platby: bankovním převodem na účet
          35-6904850267/0100.
        </li>
        <li>
          Forma platby: Platba je možná pouze jednorázově, platba na splátky
          není možná.
        </li>
        <li>
          Kupní cena je splatná do 14 dnů od uzavření smlouvy (od data vystavení
          faktury), není-li uvedeno jinak, závazek zákazníka uhradit cenu za
          produkt/zboží či službu je splněn okamžikem připsání příslušné částky
          na účet prodávajícího.
        </li>
      </ol>

      <h4>ZPŮSOB DODÁNÍ</h4>
      <ol className="tac__oList">
        <li>
          Online výuka bude poskytnuta v termínu, na kterém se vzájemně
          dohodneme. Nedohodneme-li se na termínu, má kupující i prodávající
          právo od smlouvy odstoupit.
        </li>
        <li>
          Skupinový kurz japonštiny proběhne v termínu, který je uveden v
          přihlášce na kurz. V případě změny termínu z důvodu lektora bude
          student včas informován a bude mu nabídnuto vrácení peněz.
        </li>
      </ol>

      <h4>ZABEZPEČENÍ A OCHRANA AUTORSKÝCH PRÁV</h4>
      <ol className="tac__oList">
        <li>
          Přístupové údaje k online materiálům či na příslušnou URL adresu jsou
          určeny pouze pro osobní potřebu zákazníka. Zákazník je povinen
          zachovávat mlčenlivost ohledně informací nezbytných k přístupu do jeho
          uživatelského účtu k online produktu či poskytnuté URL adrese.
        </li>
      </ol>

      <h4>ODSTOUPENÍ OD SMLOUVY</h4>
      <ol className="tac__oList">
        <li>
          Odstoupení od smlouvy ze strany spotřebitele Je-li kupující
          spotřebitelem, má právo v souladu s ustanovením § 1829 odst. 1
          občanského zákoníku právo odstoupit od smlouvy ve lhůtě čtrnácti dnů
          od převzetí/dodání služby, a to bez udání důvodu a jakékoliv sankce.
          Toto právo neslouží jako způsob řešení reklamace zboží. Rozhodne-li se
          kupující pro odstoupení v této lhůtě, musí dodržet níže uvedené
          podmínky:
          <ul className="tac__uList">
            <li>
              Nejpozději 14. den po převzetí služby musí být prodávajícímu
              odeslán projev vůle o odstoupení od smlouvy.
            </li>
            <li>
              Odstoupit lze prostřednictvím e-mailu spolu s přiložením daňového
              dokladu (faktury) o zaplacení.
            </li>
            <li>
              Částka bude vrácena nejpozději do 30 dnů od doručení emailu s
              odstoupením od smlouvy.
            </li>
          </ul>
        </li>
        <li>
          Odstoupení od smlouvy ze strany prodávajícího Prodávající je oprávněn
          od kupní smlouvy odstoupit bez zbytečného odkladu (a v případě online
          kurzu znemožnit přístup do členské sekce), pokud zjistí, že druhá
          strana porušila smlouvu podstatným způsobem. Pro účely této smlouvy se
          za podstatné porušení této smlouvy považuje:
        </li>
      </ol>

      <h4>ABSENCE NA INDIVIDUÁLNÍCH ONLINE LEKCÍCH JAPONŠTINY</h4>
      <ol className="tac__oList">
        <li>
          Kupující může během předplaceného období lekcí japonského jazyka na
          lekcích chybět, avšak je povinen tuto skutečnost oznámit minimálně 24
          hodin před další smluvenou lekcí prostřednictvím e-mailu či
          telefonního kontaktu. Pokud tak kupující neučiní, cena za odpadlou
          lekci japonského jazyka je účtována v plné výši.
        </li>
      </ol>

      <h4>ABSENCE NA SKUPINOVÉM KURZU JAPONŠTINY</h4>
      <ol className="tac__oList">
        <li>
          Kupující má možnost zrušit svou účast na kurzu maximálně 48 hodin před
          začátkem kurzu (informováním prodávajícího přes telefon či e-mail).
          Pokud tak učiní, prodávající mu vrátí 100 % zaplacené částky za daný
          kurz.
        </li>
        <li>
          V případě, že kupující zruší svou účast na kurzu 24–48 hodin před
          začátkem kurzu (informováním prodávajícího přes telefon či e-mail),
          prodávající si bude účtovat 50 % částky za daný kurz.
        </li>
        <li>
          V případě, že kupující zruší svou účast na kurzu později než 24 hodin
          před začátkem kurzu nebo se na kurz vůbec nedostaví, prodávající si
          bude účtovat 100 % částky za daný kurz.
        </li>
      </ol>

      <h4>OCHRANA OSOBNÍCH ÚDAJŮ</h4>
      <ol className="tac__oList">
        <li>
          Prohlášení prodávajícího: Prodávající se zavazuje plně respektovat
          důvěrný charakter osobních a firemních dat kupujícího, která jsou
          zabezpečena proti neautorizovanému přístupu a chráněna proti zneužití.
          Údaje nutné k fakturaci jsou nezbytné pro identifikaci kupujícího.
          Jsou použity k realizaci celého obchodu, včetně nezbytných účetních
          operací, vystavení daňových dokladů, identifikaci bezhotovostních
          plateb a pro komunikaci s kupujícím.
        </li>
        <li>
          Detailní osobní data i údaje o nákupech kupujícího jsou ukládány v
          databázi s přísným zabezpečením proti zneužití a nejsou poskytovány
          třetím stranám.
        </li>
        <li>
          Na požádání vám dle možnosti obratem a písemně oznámím, zda a jaké
          osobní údaje mám o vás zaznamenané. Pokud by navzdory snahám o
          aktuálnost údajů byly zaznamenány nesprávné informace, na požádání
          budou opraveny.
        </li>
        <li>
          Kupující, prodávající i lektor účastnící se kurzů berou tímto na
          vědomí, že veškeré informace, které o sobě vzájemně účastníci i lektor
          při studiu získají, jsou pokládány za velmi důvěrné a citlivé a s jako
          takovými budou s nimi nakládat.
        </li>
      </ol>

      <h4>ÚČINNOST</h4>
      <p>
        Tyto obchodní podmínky nabývají účinnosti dne 1. 1. 2022. Informace jsou
        sdělovány prostřednictvím e-mailu. Prodávající si vyhrazuje právo na
        změnu těchto obchodních podmínek. Každá nová verze obchodních podmínek
        bude zaslána e-mailem a bude označena datem účinnosti. Veškeré
        objednávky se vždy řídí aktuální verzí obchodních podmínek.
      </p>

      <h4>ZÁVĚREČNÁ USTANOVENÍ</h4>
      <p>Znění těchto obchodních podmínek je pro smluvní strany závazné.</p>

      <h4>KONTAKTNÍ ÚDAJE</h4>
      <p>
        Pokud se na mě budete chtít v průběhu zpracování obrátit, můžete mě
        kontaktovat na mou e-mailovou adresu japonstina.aja@gmail.com
      </p>

      <p>
        Prohlašuji, že jako správce vašich osobních údajů splňuji veškeré
        zákonné povinnosti vyžadované platnou legislativou, zejména zákonem o
        ochraně osobních údajů a GDPR, a tedy že:
      </p>

      <ul className="tac__uList">
        <li>
          budu zpracovávat vaše osobní údaje jen na základě platného právního
          důvodu, a to především oprávněného zájmu, plnění smlouvy, zákonné
          povinnosti či uděleného souhlasu,
        </li>
        <li>
          plním dle článku 13 GDPR informační povinnost ještě před zahájením
          zpracování osobních údajů,
        </li>
        <li>
          umožním a budu vás podporovat v uplatňování a plnění vašich práv podle
          zákona o ochraně osobních údajů a GDPR.
        </li>
      </ul>

      <h4>ROZSAH OSOBNÍCH ÚDAJŮ A ÚČELY ZPRACOVÁNÍ</h4>
      <p>
        Zpracovávám osobní údaje, které mi svěříte sami, a to z následujících
        důvodů (pro naplnění těchto účelů):
      </p>
      <ul className="tac__uList">
        <li>poskytování služeb, plnění smlouvy</li>
        <li>vedení účetnictví</li>
        <li>marketing</li>
      </ul>
      <p>
        Jste-li zákazníky, vaše osobní údaje (fakturační údaje) nezbytně
        potřebuji, abych vyhověla zákonné povinnosti pro vystavování a evidenci
        daňových dokladů.
      </p>

      <h4>ZABEZPEČENÍ A OCHRANA OSOBNÍCH ÚDAJŮ</h4>
      <p>
        Chráním osobní údaje v maximální možné míře pomocí moderních
        technologií, které odpovídají stupni technického rozvoje. Přijala jsem a
        udržuji veškerá možná (aktuálně známá) technická a organizační opatření,
        která zamezují zneužití, poškození nebo zničení vašich osobních údajů.
      </p>

      <h4>PŘEDÁVÁNÍ DAT MIMO EVROPSKOU UNII</h4>
      <p>Veškeré zpracování osobních údajů bude prováděno na území EU.</p>

      <h4>VAŠE PRÁVA V SOUVISLOSTI S OCHRANOU OSOBNÍCH ÚDAJŮ</h4>
      <p>
        V souvislosti s ochranou osobních údajů máte řadu práv. Pokud budete
        chtít některého z těchto práv využít, kontaktujte mě prostřednictvím
        e-mailu japonstina.aja@gmail.com . Máte právo na informace, které je
        plněno již touto informační stránkou se zásadami zpracování osobních
        údajů. Díky právu na přístup mě můžete kdykoli vyzvat a já vám doložím
        ve lhůtě 14 dní jaké vaše osobní údaje zpracovávám a proč. Pokud se u
        vás něco změní nebo shledáte své osobní údaje neaktuální nebo neúplné,
        máte právo na doplnění a změnu osobních údajů. Právo na omezení
        zpracování můžete využít, pokud se domníváte, že zpracovávám vaše
        nepřesné údaje, domníváte se, že provádím zpracování nezákonně, ale
        nechcete všechny údaje smazat nebo pokud jste vznesl námitku proti
        zpracování.
      </p>
      <p>Tyto zásady zpracování osobních údajů platí od 1. 1. 2022.</p>
    </div>
  );
};
export default TermsAndConditions;
