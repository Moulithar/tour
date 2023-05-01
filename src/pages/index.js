import * as React from "react"
import "../components/styles/global.css";
import "../components/styles/icon.css";
import "../components/styles/custom.css";
import img1 from "../images/images1.webp";
import img2 from "../images/images2.webp";
import img3 from "../images/images3.webp";
import img4 from "../images/images4.webp";
import img5 from "../images/images5.webp";
import img6 from "../images/images6.webp";
import img7 from "../images/images7.webp";
import img8 from "../images/images8.webp";
import img9 from "../images/images9.webp";
import img10 from "../images/images10.webp";
import img11 from "../images/images11.webp";
import img12 from "../images/images12.webp";
import imone from "../images/01.webp";
import imtwo from "../images/02.webp";
import imthree from "../images/03.webp";
import Header from "../components/Header/Header";
import Bunzoslider from "../components/Bunzo-slider/Bunzo-slider";
import Team from "../components/Team/Team";
import Blog from "../components/Blog/blog";
import Footer from "../components/Footer/Footer";

// const teamOptions = [
//   {
//     title: <div> 
//       <h3>Fletch Skinner</h3>
//       <p>product strategist</p>
//     </div>,
//     desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
//     image: img1
//   },
//   {
//     title:  <div> 
//               <h3>Lance bogrol</h3>
//               <p>visual designer</p>
//             </div>,
//     desc:   <div>
//             <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
//             </div>,
//     image: img2  
//   },
//   {
//     title:  <div> 
//               <h3>valentina morose</h3>
//               <p>android developer</p>
//             </div>,
//     desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
//     image: img3  
//   },
//   {
//     title:  <div> 
//               <h3>Giles posture</h3>
//               <p>IOS designer</p>
//             </div>,
//     desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
//     image: img5 
//   },
//   {
//     title:  <div> 
//               <h3>Giles posture</h3>
//               <p>IOS designer</p>
//             </div>,
//     desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
//     image: img4  
//   },
//   {
//     title:  <div> 
//               <h3>Giles posture</h3>
//               <p>IOS designer</p>
//             </div>,
//     desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
//     image: img6  
//   },
// ]
const blogOptions = [
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>,
    image: img10
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum.</p>,
    image: img11
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor tortor eu</p>,
    image: img12
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>,
    image: imone
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum.</p>,
    image: imtwo
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor tortor eu</p>,
    image: imthree
  },
]

const IndexPage = () => (

    <>
 
    <Bunzoslider />
    <Team  />
  <div>Test merge</div>
    <Blog dataItems={blogOptions}/>
    <Header />
    <Footer />
    {/* <h1>hello m</h1>
      <div className="text-center">
        <p>new days</p>
        <Container>
        <div className="d-flex gap-2 justify-content-end align-items-end">     
                <li>
                  hwllo
                </li>
                <li>
                  hwkjdsbkbgfllo
                </li>
                <li>
                  hwldubakkorlo
                </li>
    </div>
        </Container> 
        
</div> */}
  </>
  );

export default IndexPage
