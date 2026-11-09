const assetPathPrefix = "https://www.figma.com/api/mcp/asset/02b59b5c-97b4-4718-b61e-90298778be99";
const imgLogoIhc2 = `${assetPathPrefix}/25d7a.png`;
const imgLogoIhc1 = `${assetPathPrefix}/f480e.svg`;
const imgImage2 = `${assetPathPrefix}/5fb84.png`;
const imgImage7 = `${assetPathPrefix}/02333.png`;
const imgImage1 = `${assetPathPrefix}/a9bc4.svg`;
const imgLine3 = `${assetPathPrefix}/bb8af.svg`;

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[210px]"} data-node-id="1:25" data-name="Logo">
      <div className="-translate-y-1/2 absolute aspect-[1254/1254] left-[-2.82%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.916px_6.415px] mask-size-[210px_210px] right-[-2.82%] top-[calc(50%-0.5px)]" data-node-id="1:22" style={{ maskImage: `url("${imgLogoIhc1}")` }} data-name="logoIHC 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoIhc2} />
      </div>
    </div>
  );
}

export default function Inicial() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-node-id="1:2" data-name="Inicial">
      <div className="absolute contents left-0 top-0" data-node-id="2:11">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[683px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[59px_48px] mask-size-[430px_587px] top-[calc(50%-172.5px)] w-[548px]" data-node-id="3:1787" style={{ maskImage: `url("${imgImage1}")` }} data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
        <div className="absolute h-[741px] left-[-22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22px_72px] mask-size-[430px_587px] top-[-72px] w-[466px]" data-node-id="69:428" style={{ maskImage: `url("${imgImage1}")` }} data-name="image 7">
          <div className="absolute inset-[-1.35%_-3.08%_-2.66%_-3.08%]">
            <img alt="" className="block max-w-none size-full" height="770.743" src={imgImage7} width="494.694" />
          </div>
        </div>
      </div>
      <Logo className="absolute left-[90px] size-[249px] top-[416px]" />
      <p className="[word-break:break-word] absolute font-['Khula:ExtraBold'] font-black leading-[normal] left-[126px] text-[#4d91ff] text-[32px] top-[677px] whitespace-nowrap" data-node-id="3:1789" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        VAMOS LÁ?
      </p>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-center justify-center left-[calc(50%-0.5px)] top-[741px] w-[365px]" data-node-id="3:1794">
        <div className="bg-gradient-to-r content-stretch flex from-[#4d91ff] h-[61px] items-center justify-center p-[10px] relative rounded-[16px] shrink-0 to-[#2e5799] w-full" data-node-id="3:1792">
          <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[1.2px] whitespace-nowrap" data-node-id="3:1790">
            ENTRAR
          </p>
        </div>
        <div className="bg-gradient-to-r content-stretch flex from-[#4d91ff] items-center justify-center p-[10px] relative rounded-[16px] shrink-0 to-[#2e5799] w-full" data-node-id="3:1793">
          <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[1.2px] whitespace-nowrap" data-node-id="3:1791">
            CADASTRE-SE
          </p>
        </div>
      </div>
      <div className="absolute contents left-[193px] top-[895px]" data-node-id="5:1800">
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[196px] not-italic text-[#4d91ff] text-[16px] top-[895px] whitespace-nowrap" data-node-id="5:1798">
          pular
        </p>
        <div className="absolute h-0 left-[193px] top-[919px] w-[44px]" data-node-id="5:1799">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine3} />
          </div>
        </div>
      </div>
    </div>
  );
}
