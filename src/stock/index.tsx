import { useEffect, useState } from 'react';
import { stockItemData, throttle } from '../chart/common';
import './index.scss';
import kline from '../chart/kline';
import { touchPan } from '../chart/touchPan';
import Info from './info';

export default function Index() {
  const [detail, setDetail] = useState<stockItemData | null>(null);

  const init = () => {
    const container = document.getElementById('container')!;
    const width = Math.floor(container.clientWidth);
    const height = Math.floor(container.clientHeight);
    const stock = '0.002594';

    const getNewestData = (item: stockItemData) => {
      setDetail(item);
    };

    const changeIndex = throttle((item: stockItemData) => {
      setDetail(item);
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
      <Info detail={detail}></Info>
        
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
