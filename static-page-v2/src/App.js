import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Static App (V2)</h1>
      </header>
      <p>Bacon ipsum dolor amet chuck pork chop drumstick pork, rump bresaola swine shankle landjaeger tri-tip filet mignon ham tenderloin. Ham hock strip steak cow jerky pig biltong, drumstick salami beef ribs pastrami fatback spare ribs flank tail. Venison cupim alcatra tongue, drumstick sirloin beef salami cow pork loin brisket jowl. Bresaola flank pork chop ham chislic. Shoulder pastrami sausage, frankfurter meatloaf corned beef pig chicken. Shank chislic spare ribs, turducken fatback swine short ribs ball tip shankle brisket meatball shoulder frankfurter kevin pork chop.</p>
      <MoreLink linkTarget="/page1" />

      <p>Filet mignon beef chuck leberkas t-bone venison. Hamburger pork chop pork belly, brisket tail picanha leberkas. Frankfurter leberkas tenderloin venison ball tip tri-tip jowl picanha bacon alcatra pastrami pork andouille. Chicken jerky beef ribs ground round, buffalo kevin picanha tail capicola. Short ribs picanha prosciutto buffalo ribeye ham shankle frankfurter turducken tongue filet mignon doner leberkas. Bresaola alcatra buffalo kevin pork loin ham. Turducken andouille spare ribs swine venison.</p>
      <MoreLink linkTarget="/page2" linkText="See Topic" />

      <p>Tail strip steak jerky kevin, sausage shank salami. Chicken boudin cow pig bresaola corned beef. Landjaeger cupim bacon ball tip, pork chop kevin flank burgdoggen filet mignon alcatra picanha. Alcatra landjaeger pork chop strip steak meatloaf. Chicken pork loin biltong turducken. Pork kevin pork belly, sausage ribeye landjaeger biltong rump buffalo ball tip.</p>
      <MoreLink linkTarget="/page3" />

      <p>Andouille alcatra leberkas, chuck tail pork doner turducken porchetta chislic. Pastrami tri-tip turkey chuck fatback tenderloin. Tail short loin meatloaf venison tongue ground round corned beef salami. Bresaola kevin porchetta beef ground round meatball turducken chicken t-bone.</p>
      <MoreLink linkTarget="/page4" linkText="See Another Topic" />

      <p>Frankfurter bacon chicken, turducken pork chop brisket meatloaf beef. Biltong chuck shoulder meatball, bacon tri-tip brisket meatloaf pork belly ball tip tongue ground round prosciutto pig beef ribs. Burgdoggen venison shankle, kevin bacon leberkas t-bone. Ball tip pastrami landjaeger ham spare ribs. Chuck strip steak pastrami ribeye. Beef burgdoggen venison, prosciutto filet mignon shank beef ribs corned beef cupim t-bone ham hock jowl pork brisket. Venison rump burgdoggen buffalo jerky kielbasa short ribs shoulder beef sausage.</p>

      <footer>Sample Static React App By John M. Wargo</footer>
    </div>
  );
}

class MoreLink extends React.Component {
  render() {

    // set our default value for link text just in case we don't get it from App()
    let linkText = this.props.linkText ? this.props.linkText : "Learn More";

    return (
      <div>
        <a href={this.props.linkTarget} className="more-link">{linkText}</a>
      </div>
    );
  }
}

export default App;
