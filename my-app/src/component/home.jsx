import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import './index.css';
export default function home() {
      return (
            <>
                  <h1>
                        <span>NEW COLLECTION</span>
                        METROPOLIS SERIES
                  </h1>

                  <ul className="list-img">
                        <li>
                              <img src={img1} alt="" />
                        </li>
                        <li>
                              <img src={img2} alt="" />
                        </li>
                        <li>
                              <img src={img3} alt="" />
                        </li>
                  </ul>
            </>
      );
}
