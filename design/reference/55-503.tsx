const assetPathPrefix = "https://www.figma.com/api/mcp/asset/167a291a-7152-44a9-b7bf-ee9c254394d6";
const imgMakiAmusementPark = `${assetPathPrefix}/cf7f4.svg`;
const imgCooliconsTennisBallFill = `${assetPathPrefix}/5843e.svg`;
const imgAtIconsTree = `${assetPathPrefix}/2884d.svg`;
const imgFluentFood24Filled = `${assetPathPrefix}/5fd39.svg`;
const imgCiUser02 = `${assetPathPrefix}/3f8cc.svg`;
const imgAkarIconsSearch = `${assetPathPrefix}/0192b.svg`;
const imgAkarIconsHome = `${assetPathPrefix}/1bbc8.svg`;
const imgEllipse6 = `${assetPathPrefix}/e2965.svg`;
const imgEllipse12 = `${assetPathPrefix}/190a6.svg`;
const imgGroup = `${assetPathPrefix}/bfebc.svg`;

function MakiAmusementPark({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="39:194" data-name="maki:amusement-park">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMakiAmusementPark} />
    </div>
  );
}

function CooliconsTennisBallFill({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="43:482" data-name="coolicons:tennis-ball-fill">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCooliconsTennisBallFill} />
    </div>
  );
}

function AtIconsTree({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="39:131" data-name="at-icons:tree">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAtIconsTree} />
    </div>
  );
}

function FluentFood24Filled({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="27:91" data-name="fluent:food-24-filled">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFluentFood24Filled} />
    </div>
  );
}

function CiUser02({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[36px]"} data-node-id="39:43" data-name="ci:user-02">
      <div className="absolute inset-[-22.22%_-27.78%_-33.33%_-27.78%]">
        <img alt="" className="block max-w-none size-full" src={imgCiUser02} />
      </div>
    </div>
  );
}

function AkarIconsSearch({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="39:40" data-name="akar-icons:search">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsSearch} />
    </div>
  );
}

function AkarIconsHome({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[36px]"} data-node-id="39:37" data-name="akar-icons:home">
      <div className="absolute inset-[-22.22%_-27.78%_-33.33%_-27.78%]">
        <img alt="" className="block max-w-none size-full" src={imgAkarIconsHome} />
      </div>
    </div>
  );
}

function Group19({ className }: { className?: string }) {
  return (
    <div className={className || "h-[104px] relative w-[430px]"} data-node-id="39:75">
      <div className="absolute bg-white blur-[0px] inset-0" data-node-id="39:70" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[20px] items-center justify-center left-1/2 top-[calc(50%-6.5px)]" data-node-id="39:46">
        <AkarIconsHome className="relative shrink-0 size-[36px]" />
        <div className="bg-white content-stretch drop-shadow-[0px_2px_5px_rgba(0,0,0,0.5)] flex gap-[10px] items-center pl-[10px] pr-[30px] py-[5px] relative rounded-[64px] shrink-0 w-[226px]" data-node-id="39:45">
          <AkarIconsSearch className="relative shrink-0 size-[24px]" />
          <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(77,145,255,0.9)] whitespace-nowrap" data-node-id="39:44">
            Onde você quer conhecer?
          </p>
        </div>
        <CiUser02 className="relative shrink-0 size-[36px]" />
      </div>
    </div>
  );
}

export default function MaisInformacoes() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-node-id="55:503" data-name="Mais informações">
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] h-[62px] leading-[52px] left-[20px] not-italic text-[#4d91ff] text-[48px] top-[40px] w-[139px]" data-node-id="55:504">
        Mais:
      </p>
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] h-[48px] leading-[normal] left-[20px] not-italic text-[24px] text-black top-[113px] w-[240px]" data-node-id="55:505">
        Adicionar fotos
      </p>
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] font-black h-[48px] leading-[normal] left-[calc(50%-195px)] text-[24px] text-black top-[362px] w-[329px]" data-node-id="55:506" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Quanto você pagou?
      </p>
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] font-black h-[48px] leading-[normal] left-[20px] text-[24px] text-black top-[483px] w-[343px]" data-node-id="55:507" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Horário de Funcionamento
      </p>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[35px] items-center left-1/2 top-[409px] w-[390px]" data-node-id="55:518">
        <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[20px] py-[15px] relative rounded-[8px] shrink-0" data-node-id="55:519">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap" data-node-id="55:520">
            R$ 0-30
          </p>
        </div>
        <div className="bg-gradient-to-r content-stretch flex from-[#4d91ff] items-center justify-center px-[20px] py-[15px] relative rounded-[8px] shrink-0 to-[#2e5799]" data-node-id="55:521">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#fffdfd] text-[16px] whitespace-nowrap" data-node-id="55:522">
            R$ 30-60
          </p>
        </div>
        <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[20px] py-[15px] relative rounded-[8px] shrink-0" data-node-id="55:523">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#555] text-[16px] whitespace-nowrap" data-node-id="55:524">
            R$ 60+
          </p>
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[531px]" data-node-id="92:659">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[536px] w-[33.429px]" data-node-id="55:525">
          Seg
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[535px] w-[40.114px]" data-node-id="55:526" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[537px] w-[20.057px]" data-node-id="55:527">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[531px] w-[93.6px]" data-node-id="55:528" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[536px] w-[40.114px]" data-node-id="55:529">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[531px] w-[93.6px]" data-node-id="55:530" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[537px] w-[47.914px]" data-node-id="55:531">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[537px] w-[8.914px]" data-node-id="55:532">
          -
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[574px] w-[28.971px]" data-node-id="55:533">
          Ter
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[573px] w-[40.114px]" data-node-id="55:534" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[575px] w-[20.057px]" data-node-id="55:535">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[569px] w-[93.6px]" data-node-id="55:536" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[574px] w-[40.114px]" data-node-id="55:537">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[569px] w-[93.6px]" data-node-id="55:538" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[575px] w-[47.914px]" data-node-id="55:539">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[575px] w-[8.914px]" data-node-id="55:540">
          -
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[688px] w-[32.314px]" data-node-id="55:541">
          Sex
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[687px] w-[40.114px]" data-node-id="55:542" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[689px] w-[20.057px]" data-node-id="55:543">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[683px] w-[93.6px]" data-node-id="55:544" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[688px] w-[40.114px]" data-node-id="55:545">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[683px] w-[93.6px]" data-node-id="55:546" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[689px] w-[47.914px]" data-node-id="55:547">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[689px] w-[8.914px]" data-node-id="55:548">
          -
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[726px] w-[33.429px]" data-node-id="55:549">
          Sáb
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[725px] w-[40.114px]" data-node-id="55:550" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[727px] w-[20.057px]" data-node-id="55:551">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[721px] w-[93.6px]" data-node-id="55:552" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[726px] w-[40.114px]" data-node-id="55:553">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[721px] w-[93.6px]" data-node-id="55:554" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[727px] w-[47.914px]" data-node-id="55:555">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[727px] w-[8.914px]" data-node-id="55:556">
          -
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[764px] w-[40.114px]" data-node-id="55:557">
          Dom
        </p>
        <div className="absolute bg-white h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[763px] w-[40.114px]" data-node-id="55:558" />
        <div className="absolute h-[18px] left-[calc(20%+1.97px)] top-[765px] w-[20.057px]" data-node-id="55:559">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[759px] w-[241.8px]" data-node-id="55:560" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%-5.11px)] not-italic text-[16px] text-black top-[764px] w-[73.543px]" data-node-id="55:561">
          Fechado
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[612px] w-[35.657px]" data-node-id="55:562">
          Qua
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[611px] w-[40.114px]" data-node-id="55:563" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[613px] w-[20.057px]" data-node-id="55:564">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[607px] w-[93.6px]" data-node-id="55:565" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[612px] w-[40.114px]" data-node-id="55:566">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[607px] w-[93.6px]" data-node-id="55:567" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[613px] w-[47.914px]" data-node-id="55:568">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[613px] w-[8.914px]" data-node-id="55:569">
          -
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[16px] text-black top-[650px] w-[30.086px]" data-node-id="55:570">
          Qui
        </p>
        <div className="absolute bg-[#4b8eff] h-[22px] left-[calc(20%-0.26px)] rounded-[11px] top-[649px] w-[40.114px]" data-node-id="55:571" />
        <div className="absolute h-[18px] left-[calc(20%+18.69px)] top-[651px] w-[20.057px]" data-node-id="55:572">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
        </div>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(40%-3.8px)] rounded-[8px] top-[645px] w-[93.6px]" data-node-id="55:573" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(40%+22.94px)] not-italic text-[16px] text-black top-[650px] w-[40.114px]" data-node-id="55:574">
          9:00
        </p>
        <div className="absolute bg-[#e5e5e5] h-[30px] left-[calc(60%+58.4px)] rounded-[8px] top-[645px] w-[93.6px]" data-node-id="55:575" />
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(80%-1.97px)] not-italic text-[16px] text-black top-[651px] w-[47.914px]" data-node-id="55:576">
          18:00
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[calc(60%+27.2px)] not-italic text-[16px] text-black top-[651px] w-[8.914px]" data-node-id="55:577">
          -
        </p>
      </div>
      <Group19 className="-translate-x-1/2 absolute h-[104px] left-1/2 top-[1014px] w-[430px]" />
      <div className="absolute contents left-[20px] top-[848px]" data-node-id="66:316">
        <div className="absolute border border-[#4d91ff] border-solid content-stretch flex items-center left-[calc(40%+65px)] px-[10px] py-[2px] rounded-[16px] top-[848px]" data-node-id="66:317">
          <p className="[word-break:break-word] font-['Khula:Regular'] h-[31px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[127px]" data-node-id="66:318">
            Restaurantes
          </p>
          <FluentFood24Filled className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute bg-[#4d91ff] content-stretch flex items-center justify-center left-[21px] px-[10px] py-[5px] rounded-[16px] top-[849px]" data-node-id="66:320">
          <p className="[word-break:break-word] font-['Khula:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="66:321">
            Todos
          </p>
        </div>
        <div className="absolute bg-[#4d91ff] content-stretch flex items-center justify-center left-[80%] px-[10px] py-[5px] rounded-[16px] top-[897px]" data-node-id="66:322">
          <p className="[word-break:break-word] font-['Khula:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="66:323">
            Mais
          </p>
        </div>
        <div className="absolute border-[#4d91ff] border-[0.8px] border-solid content-stretch flex gap-[27px] items-center justify-center left-[20px] px-[10px] py-[2px] rounded-[16px] top-[896px]" data-node-id="66:324">
          <p className="[word-break:break-word] font-['Khula:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="66:325">
            Natureza
          </p>
          <AtIconsTree className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute border-[#4d91ff] border-[0.8px] border-solid content-stretch flex gap-[31px] items-center justify-center left-[calc(40%+11px)] px-[10px] py-[2px] rounded-[16px] top-[896px]" data-node-id="66:327">
          <p className="[word-break:break-word] font-['Khula:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="66:328">
            Esportes
          </p>
          <CooliconsTennisBallFill className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute bg-[#4d91ff] content-stretch flex items-center justify-center left-[21px] px-[10px] py-[5px] rounded-[16px] top-[849px]" data-node-id="66:330">
          <p className="[word-break:break-word] font-['Khula:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="66:331">
            Todos
          </p>
        </div>
        <div className="absolute border border-[#4d91ff] border-solid content-stretch flex items-center left-[calc(40%+65px)] px-[10px] py-[2px] rounded-[16px] top-[848px]" data-node-id="66:332">
          <p className="[word-break:break-word] font-['Khula:Regular'] h-[31px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[127px]" data-node-id="66:333">
            Restaurantes
          </p>
          <FluentFood24Filled className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute border-[#4d91ff] border-[0.8px] border-solid content-stretch flex gap-[27px] items-center justify-center left-[20px] px-[10px] py-[2px] rounded-[16px] top-[896px]" data-node-id="66:335">
          <p className="[word-break:break-word] font-['Khula:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="66:336">
            Natureza
          </p>
          <AtIconsTree className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute border-[#4d91ff] border-[0.8px] border-solid content-stretch flex gap-[31px] items-center justify-center left-[calc(40%+11px)] px-[10px] py-[2px] rounded-[16px] top-[896px]" data-node-id="66:338">
          <p className="[word-break:break-word] font-['Khula:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="66:339">
            Esportes
          </p>
          <CooliconsTennisBallFill className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute border-[#4d91ff] border-[0.8px] border-solid content-stretch flex items-center justify-center left-[calc(20%+15px)] px-[10px] py-[2px] rounded-[16px] top-[848px]" data-node-id="66:341">
          <p className="[word-break:break-word] font-['Khula:Regular'] h-[31px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[80px]" data-node-id="66:342">
            Parques
          </p>
          <MakiAmusementPark className="relative shrink-0 size-[24px]" />
        </div>
        <div className="absolute bg-[#4d91ff] content-stretch flex items-center justify-center left-[80%] px-[10px] py-[5px] rounded-[16px] top-[897px]" data-node-id="66:344">
          <p className="[word-break:break-word] font-['Khula:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="66:345">
            Mais
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-r content-stretch flex from-[#4d91ff] h-[59px] items-center justify-center left-[calc(50%-2px)] p-[10px] rounded-[16px] to-[#2e5799] top-[959px] w-[386px]" data-node-id="91:192">
        <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[0.9px] whitespace-nowrap" data-node-id="91:193">
          ENVIAR ALTERAÇÃO
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] h-[34px] leading-[normal] left-[20px] not-italic text-[24px] text-black top-[814px] w-[187px]" data-node-id="91:198">
        Categorias:
      </p>
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[161px]" data-node-id="92:1155">
        <div className="absolute bg-white h-[176px] left-[20px] rounded-[25px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.25)] top-[161px] w-[390px]" data-node-id="92:1156" />
        <p className="[word-break:break-word] absolute font-['Khula:SemiBold'] h-[20px] leading-[normal] left-[calc(20%+50px)] not-italic text-[#4d91ff] text-[20px] top-[267px] w-[192px]" data-node-id="92:1157">
          Adicione uma foto
        </p>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.1px)] overflow-clip size-[59.801px] top-[calc(50%-327.6px)]" data-node-id="92:1158" data-name="andrsrxn:camera">
          <div className="absolute inset-[14.25%_7.62%_15.71%_7.63%]" data-node-id="92:1159" data-name="Group">
            <div className="absolute inset-[-1.79%_-1.48%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
