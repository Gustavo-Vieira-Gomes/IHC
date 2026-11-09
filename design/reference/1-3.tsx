const assetPathPrefix = "https://www.figma.com/api/mcp/asset/2e88e468-d73d-4899-a86b-a2f971417544";
const imgBoxiconsUserFilled = `${assetPathPrefix}/26312.svg`;
const imgGroup = `${assetPathPrefix}/6c14f.svg`;
const imgEllipse2 = `${assetPathPrefix}/7d348.svg`;
const imgLine4 = `${assetPathPrefix}/dc6ad.svg`;
const imgGroup1 = `${assetPathPrefix}/ff8c6.svg`;
const imgGroup2 = `${assetPathPrefix}/b42a0.svg`;
const imgAkarIconsInstagramFill = `${assetPathPrefix}/6d56b.svg`;
const imgLine6 = `${assetPathPrefix}/fe8f3.svg`;

export default function Login() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-node-id="1:3" data-name="Login">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Khula:ExtraBold'] font-black justify-center leading-[0] left-[36px] text-[#4d91ff] text-[48px] top-[92px] w-[361px]" data-node-id="5:1801" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[52px]">Que bom ter você de volta!</p>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-[calc(50%-1.5px)] top-[316px] w-[365px]" data-node-id="5:1818">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="5:1816">
          <div className="bg-[#e3e3e3] col-1 content-stretch flex items-center justify-between ml-0 mt-[39px] px-[20px] py-[10px] relative rounded-[16px] row-1 w-[365px]" data-node-id="5:1807">
            <p className="[word-break:break-word] font-['Khula:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.5)] whitespace-nowrap" data-node-id="5:1802" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Digite seu nome de usuário
            </p>
            <div className="relative shrink-0 size-[30px]" data-node-id="5:1824" data-name="boxicons:user-filled">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxiconsUserFilled} />
            </div>
          </div>
          <p className="[word-break:break-word] col-1 font-['Khula:SemiBold'] font-semibold leading-[normal] ml-0 mt-0 relative row-1 text-[20px] text-black whitespace-nowrap" data-node-id="5:1814" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Usuário/email
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="5:1817">
          <div className="bg-[#e3e3e3] col-1 content-stretch flex items-center justify-between ml-0 mt-[39px] px-[20px] py-[10px] relative rounded-[16px] row-1 w-[365px]" data-node-id="5:1806">
            <p className="[word-break:break-word] font-['Khula:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.5)] whitespace-nowrap" data-node-id="5:1805">
              Digite sua senha
            </p>
            <div className="overflow-clip relative shrink-0 size-[30px]" data-node-id="5:1826" data-name="akar-icons:lock-on">
              <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-node-id="5:1827" data-name="Group">
                <div className="absolute inset-[-4.21%_-4.44%]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] col-1 font-['Khula:SemiBold'] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[20px] text-black whitespace-nowrap" data-node-id="5:1815">
            Senha
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[69px] items-center justify-center left-[calc(50%-1.5px)] top-[513px] w-[365px]" data-node-id="6:1861">
        <div className="h-[52px] relative shrink-0 w-[152px]" data-node-id="6:1833">
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Khula:Regular'] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-1/2 whitespace-nowrap" data-node-id="6:1830">
            <p className="leading-[52px]">Lembre de mim</p>
          </div>
          <div className="-translate-y-1/2 absolute left-[121px] size-[20px] top-1/2" data-node-id="6:1832">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Khula:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#4d91ff] text-[16px] whitespace-nowrap" data-node-id="6:1831">
          <p className="leading-[52px]">Esqueceu a senha?</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-r content-stretch flex from-[#4d91ff] h-[61px] items-center justify-center left-[calc(50%-1.5px)] p-[10px] rounded-[16px] to-[#2e5799] top-[613px] w-[365px]" data-node-id="6:1834">
        <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[1.2px] whitespace-nowrap" data-node-id="6:1835">
          ENTRAR
        </p>
      </div>
      <div className="absolute content-stretch flex gap-[21px] items-center left-[32px] top-[717px]" data-node-id="6:1840">
        <div className="h-0 relative shrink-0 w-[88.006px]" data-node-id="6:1838">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Jaldi:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[1px] whitespace-nowrap" data-node-id="6:1837">
          Ou continue com
        </p>
        <div className="h-0 relative shrink-0 w-[88.006px]" data-node-id="6:1839">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-[calc(50%-1.5px)] top-[778px] w-[315px]" data-node-id="6:1857">
        <div className="bg-[#270fde] content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative rounded-[16px] shrink-0" data-node-id="6:1856">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="6:1841" data-name="akar-icons:google-contained-fill">
            <div className="absolute contents inset-0" data-node-id="6:1842" data-name="Group">
              <div className="absolute contents inset-0" data-node-id="6:1847" data-name="Clip path group">
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]" data-node-id="6:1843" style={{ maskImage: `url("${imgGroup1}")` }} data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] whitespace-nowrap" data-node-id="6:1850">
            Google
          </p>
        </div>
        <div className="bg-[#270fde] content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative rounded-[16px] shrink-0" data-node-id="6:1852">
          <div className="relative shrink-0 size-[24px]" data-node-id="6:1848" data-name="akar-icons:instagram-fill">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsInstagramFill} />
          </div>
          <p className="[word-break:break-word] font-['Jaldi:Bold'] leading-[normal] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] whitespace-nowrap" data-node-id="6:1851">
            Instagram
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] h-[27px] items-center justify-end left-[calc(50%-2px)] px-px py-[3px] top-[856px] w-[200px]" data-node-id="6:1860">
        <p className="[word-break:break-word] absolute font-['Jaldi:Regular'] leading-[normal] left-[calc(50%-100px)] not-italic text-[#4d91ff] text-[16px] top-0 tracking-[0.8px] whitespace-nowrap" data-node-id="6:1858">
          Ainda não possui uma conta?
        </p>
        <div className="h-0 relative shrink-0 w-full" data-node-id="6:1859">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine6} />
          </div>
        </div>
      </div>
    </div>
  );
}
