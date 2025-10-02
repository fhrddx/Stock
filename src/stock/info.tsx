import { stockItemData } from "../chart/common";

export default function Info({ detail } : { detail: stockItemData | null } ){
  if(detail === null){
    return(
        <div id="detail">
            <div className="header-banner banner-border">
            <span className="header-back"></span>
            <div className="header-title">
                比亚迪<br/>
                <span>002594</span>
            </div>
            </div>
            <div className="hq-container">
            <span className="number-text big">--</span>
            <span className="number-text"></span>
            <span className="number-text"></span>
            </div>
            <div className="table-line">
            <div className="table-cell">
                今开<span className="number">-</span>
            </div>
            <div className="table-cell">
                最高<span className="number">-</span>
            </div>
            <div className="table-cell">
                最低<span className="number">-</span>
            </div>
            </div>
            <div className="table-line">
            <div className="table-cell">
                换手<span className="number">-</span>
            </div>
            <div className="table-cell">
                总手<span className="number">-</span>
            </div>
            <div className="table-cell">
                金额<span className="number">-</span>
            </div>
            </div>
            <div className="table-line">
            <div className="table-cell">
                上涨家数<span className="number">-</span>
            </div>
            <div className="table-cell">
                平盘家数<span className="number">-</span>
            </div>
            <div className="table-cell">
                下跌家数<span className="number">-</span>
            </div>
            </div>
        </div>
    )
  }
  return(
    <div id="detail">
        <div className="header-banner banner-border">
          <span className="header-back"></span>
          <div className="header-title">
            比亚迪<br/>
            <span>002594</span>
          </div>
        </div>
        <div className="hq-container">
          <span className="number-text big">--</span>
          <span className="number-text"></span>
          <span className="number-text"></span>
        </div>
        <div className="table-line">
          <div className="table-cell">
            今开<span className="number">-</span>
          </div>
          <div className="table-cell">
            最高<span className="number">-</span>
          </div>
          <div className="table-cell">
            最低<span className="number">-</span>
          </div>
        </div>
        <div className="table-line">
          <div className="table-cell">
            换手<span className="number">-</span>
          </div>
          <div className="table-cell">
            总手<span className="number">-</span>
          </div>
          <div className="table-cell">
            金额<span className="number">-</span>
          </div>
        </div>
        <div className="table-line">
          <div className="table-cell">
            上涨家数<span className="number">-</span>
          </div>
          <div className="table-cell">
            平盘家数<span className="number">-</span>
          </div>
          <div className="table-cell">
            下跌家数<span className="number">-</span>
          </div>
        </div>
    </div>
  )
}