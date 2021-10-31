import logo from './logo.svg';
import './App.css';
import Button from './stories/Button.jsx'
import TextInput from './stories/TextInput.jsx'
import ScrollButton from './stories/ScrollButton';

function App() {
  return (
    <div className="App">

      <header className="App-header" id="slide1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's learn how to visually test components using Applitools Eyes!</p>
        <p>We will use this React app with Storyboard components.</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/AutomationPanda/applitools-react-storybook-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo Project Repository
          </a>
        </p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide2"/></p>
      </header>

      <header className="App-header" id="slide2">
        <p>Web apps are full of small, reusable pieces called <b>components</b>.</p>

        <div class="component-container">
          <div><p>Here's a component named <code>Button</code>:</p></div>
          <div><p><Button label="Click me!" primary="true" size="large"></Button></p></div>
          <div><p>Here's one named <code>TextInput</code>:</p></div>
          <div><p><TextInput/></p></div>
          <div><p>The <code>ScrollButton</code> is a component, too:</p></div>
          <div><p><ScrollButton/></p></div>
        </div>

        <p>
          Components enable developers to create uniform UIs without duplicating code.
        </p>
        <p>
          This React app uses <a
            className="App-link"
            href="https://storybook.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Storybook
          </a> to build its components.
        </p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide3" /></p>
      </header>

      <header className="App-header" id="slide3">
        <p>What happens if a component changes? What if our button...</p>
        <p><Button label="Click me!" primary="true" size="large"></Button></p>
        <p>... becomes rectangular?</p>
        <p><Button label="Click me!" primary="true" rectangular="true" size="large"></Button></p>
        <p>... or changes color?</p>
        <p><Button label="Click me!" primary="true" size="large" backgroundColor="red"></Button></p>
        <p>Is that acceptable? Is that bad? Will anyone notice?</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide4" /></p>
      </header>

      <header className="App-header" id="slide4">
        <p>What if our button become enormous, like this?</p>
        <p><Button label="Click me!" primary="true" size="enormous"></Button></p>
        <p>Clearly, this could ruin the user experience on multiple pages.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide5" /></p>
      </header>
      
      <header className="App-header" id="slide5">
        <p>We need a way to visually check for component changes:</p>
        <div class="comparison-container">
          <div><p><Button label="Click me!" primary="true" size="large"></Button></p></div>
          <div><p>&lt;=&gt;</p></div>
          <div><p><Button label="Click me!" primary="true" rectangular="true" size="large"></Button></p></div>
          <div>The "baseline"</div>
          <div></div>
          <div>The "latest"</div>
        </div>
        <p><a
            className="App-link"
            href="https://applitools.com/products-eyes/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Applitools Eyes
          </a> does this automatically for Storybook components.
        </p>
        <p>It captures screenshots for each story and uses <b>Visual AI</b> for comparisons.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide6" /></p>
      </header>

      <header className="App-header" id="slide6">
        <p>Let's see how to visually test Storybook components with Applitools!</p>
        <div className="applitools-img-container">
          <img src="applitools-dashboard.png" className="applitools-img"/>
        </div>
        <p>
          Instructions are in the <a
            className="App-link"
            href="https://github.com/AutomationPanda/applitools-react-storybook-demo/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
          README
          </a>.
        </p>
      </header>

    </div>
  );
}

export default App;
