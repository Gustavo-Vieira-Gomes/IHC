const assetPathPrefix = "https://www.figma.com/api/mcp/asset/fcc2da0e-8289-4c34-b749-620f55692a21";
const imgAkarIconsCirclePlusFill = `${assetPathPrefix}/83e9e.svg`;
const imgFluentFood24Filled = `${assetPathPrefix}/5fd39.svg`;
const imgCiUser02 = `${assetPathPrefix}/3f8cc.svg`;
const imgAkarIconsSearch = `${assetPathPrefix}/0192b.svg`;
const imgAkarIconsHome = `${assetPathPrefix}/1bbc8.svg`;
const imgImage7 = `${assetPathPrefix}/02333.png`;
const imgImage4 = `${assetPathPrefix}/f1c86.png`;
const imgImage8 = `${assetPathPrefix}/1db01.png`;
const imgAkarIconsStar = `${assetPathPrefix}/273b7.svg`;
const imgAkarIconsStar1 = `${assetPathPrefix}/2a046.svg`;
const imgMaskGroup = `${assetPathPrefix}/1c4fb.svg`;
const imgImage3 = `${assetPathPrefix}/540b9.svg`;
const imgGroup13 = `${assetPathPrefix}/5d1dc.svg`;
const imgGroup14 = `${assetPathPrefix}/a98df.svg`;

function AkarIconsCirclePlusFill({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[60px]"} data-node-id="66:427" data-name="akar-icons:circle-plus-fill">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsCirclePlusFill} />
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

function Navbar({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[21px] items-center relative"} data-node-id="39:61" data-name="Navbar">
      <AkarIconsHome className="relative shrink-0 size-[36px]" />
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center pl-[10px] pr-[30px] py-[5px] relative rounded-[64px] shrink-0" data-node-id="39:51">
        <AkarIconsSearch className="relative shrink-0 size-[24px]" />
        <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(77,145,255,0.9)] whitespace-nowrap" data-node-id="39:53">
          Onde você quer conhecer?
        </p>
      </div>
      <CiUser02 className="relative shrink-0 size-[36px]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-node-id="1:12" data-name="Home">
      <Navbar className="absolute content-stretch flex gap-[21px] h-[49px] items-center left-[34px] top-[851px] w-[400px]" />
      <div className="absolute h-[741px] left-[-22px] top-[-72px] w-[466px]" data-node-id="42:166" data-name="image 7">
        <div className="absolute inset-[-1.35%_-3.08%_-2.66%_-3.08%]">
          <img alt="" className="block max-w-none size-full" height="770.743" src={imgImage7} width="494.694" />
        </div>
      </div>
      <div className="absolute bg-white h-[180px] left-[calc(40%+56px)] overflow-clip rounded-[16px] shadow-[-4px_4px_25px_0px_rgba(0,0,0,0.25)] top-[626px] w-[182px]" data-node-id="42:50">
        <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex gap-[5px] h-[24px] items-center left-[53px] top-[108px]" data-node-id="42:51" data-name="akar-icons:star">
          <div className="relative shrink-0 size-[12px]" data-node-id="42:52" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:54" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:56" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:58" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="42:60" data-name="akar-icons:star">
            <div className="absolute contents inset-[8.33%]" data-node-id="42:61">
              <div className="absolute inset-[8.33%]" data-node-id="42:62" data-name="Mask group">
                <div className="absolute inset-[-1.5%_-1.51%]">
                  <img alt="" className="block max-w-none size-full" src={imgMaskGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-0 top-0" data-node-id="42:66">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[170px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22px_26px] mask-size-[226px_95px] top-[calc(50%-31px)] w-[226px]" data-node-id="42:68" style={{ maskImage: `url("${imgImage3}")` }} data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
        </div>
        <div className="absolute left-[15px] size-[33px] top-[84px]" data-node-id="42:69">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
        </div>
        <p className="[word-break:break-word] absolute font-['Khula:SemiBold'] font-semibold leading-[normal] left-[53px] text-[16px] text-black top-[95px] whitespace-nowrap" data-node-id="42:72" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          Pastel Gostosão
        </p>
        <p className="[word-break:break-word] absolute font-['Khula:Regular'] leading-[normal] left-[138px] not-italic text-[#4d91ff] text-[10px] top-[115px] whitespace-nowrap" data-node-id="42:73">
          4.5
        </p>
        <p className="[word-break:break-word] absolute font-['Khula:Regular'] leading-[normal] left-[24px] not-italic text-[12px] text-black top-[132px] w-[183px]" data-node-id="42:74">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
      </div>
      <div className="absolute bg-white h-[180px] left-[21px] overflow-clip rounded-[16px] shadow-[-4px_4px_25px_0px_rgba(0,0,0,0.25)] top-[626px] w-[183px]" data-node-id="42:23">
        <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex gap-[5px] h-[24px] items-center left-[53px] top-[108px]" data-node-id="42:24" data-name="akar-icons:star">
          <div className="relative shrink-0 size-[12px]" data-node-id="42:25" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:27" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:29" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="42:31" data-name="akar-icons:star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsStar1} />
          </div>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="42:33" data-name="akar-icons:star">
            <div className="absolute contents inset-[8.33%]" data-node-id="42:34">
              <div className="absolute inset-[8.33%]" data-node-id="42:35" data-name="Mask group">
                <div className="absolute inset-[-1.5%_-1.51%]">
                  <img alt="" className="block max-w-none size-full" src={imgMaskGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-0 top-0" data-node-id="42:39">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[170px] left-[calc(50%+0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21px_26px] mask-size-[226px_95px] top-[calc(50%-31px)] w-[226px]" data-node-id="42:41" style={{ maskImage: `url("${imgImage3}")` }} data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
        </div>
        <div className="absolute left-[15px] size-[33px] top-[84px]" data-node-id="42:42">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup14} />
        </div>
        <p className="[word-break:break-word] absolute font-['Khula:SemiBold'] leading-[normal] left-[53px] not-italic text-[16px] text-black top-[95px] whitespace-nowrap" data-node-id="42:45">
          Lanche Gostoso
        </p>
        <p className="[word-break:break-word] absolute font-['Khula:Regular'] leading-[normal] left-[138px] not-italic text-[#4d91ff] text-[10px] top-[115px] whitespace-nowrap" data-node-id="42:46">
          4.5
        </p>
        <p className="[word-break:break-word] absolute font-['Khula:Regular'] leading-[normal] left-[24px] not-italic text-[12px] text-black top-[132px] w-[183px]" data-node-id="42:47">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
      </div>
      <div className="absolute h-[244.054px] left-[-850.5px] top-[676.95px] w-[572px]" data-node-id="42:165" data-name="image 7">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="244.054" src={imgImage8} width="572" />
      </div>
      <AkarIconsCirclePlusFill className="absolute left-[calc(80%+6px)] size-[60px] top-[23px]" />
      <div className="absolute contents left-[21px] top-[575px]" data-node-id="91:188">
        <div className="absolute bg-white border border-[#4d91ff] border-solid content-stretch flex items-center justify-center left-[21px] p-[10px] rounded-bl-[16px] rounded-tl-[16px] top-[575px]" data-node-id="91:186">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d91ff] text-[12px] whitespace-nowrap" data-node-id="91:184">
            Mais próximos
          </p>
        </div>
        <div className="absolute bg-[#4d91ff] border border-[#4d91ff] border-solid content-stretch flex items-center justify-center left-[calc(20%+38px)] p-[10px] rounded-br-[16px] rounded-tr-[16px] top-[575px]" data-node-id="91:187">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="91:185">
            Favoritos
          </p>
        </div>
      </div>
    </div>
  );
}
