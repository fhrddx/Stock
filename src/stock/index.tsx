import { useEffect } from 'react';
import { stockItemData, throttle } from '../chart/common';
import './index.scss';
import kline from '../chart/kline';
import { touchPan } from '../chart/touchPan';

export default function Index() {
  const init = () => {
    const container = document.getElementById('container')!;
    const width = Math.floor(container.clientWidth);
    const height = Math.floor(container.clientHeight);
    const stock = '0.002594';

    const getNewestData = (item: stockItemData) => {
      console.log('最新的数据是：' + JSON.stringify(item));
    };

    const changeIndex = throttle((item: stockItemData) => {
      console.log('hover：' + JSON.stringify(item));
    }, 150);

    //实例化第一个canvas面板
    const klineChart = new kline({
      canvasId: 'canvas',
      touchPanCanvasId: 'canvasTop',
      stock: stock,
      width: width,
      height: height,
      callback: getNewestData,
    });
    klineChart.create();

    //实例化一个操作层
    const touchPanChart = new touchPan(klineChart, changeIndex);
    touchPanChart.init();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="main-content">
      <div id="detail">
        <div className="header-banner banner-border">
          <span className="header-back"></span>
          <div className="header-title">
            板块<br/>
            <span>BK</span>
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
        
      <div className="tab-container">
        <ul className="tab">
          <li data-type="T1">
            <span>分时</span>
          </li>
          <li data-type="T5">
            <span>五日</span>
          </li>
          <li className="active" data-type="DK">
            <span>日K</span>
          </li>
          <li data-type="WK">
            <span>周K</span>
          </li>
          <li data-type="MK">
            <span>月K</span>
          </li>
          <li>
            <span>更多</span>
            <i className="more"></i>
          </li>
        </ul>
        <div className="drop">
          <ul>
            <li data-type="M5K">
              5分钟
            </li>
            <li data-type="M15K">
              15分钟
            </li>
            <li data-type="M30K">
              30分钟
            </li>
            <li data-type="M60K">
              60分钟
            </li>
          </ul>
        </div>
      </div>

      <div className="kline-container" id="container">
        <canvas id="canvas"></canvas>
        <canvas id="canvasTop"></canvas>
      </div>
    </div>
  );
}
