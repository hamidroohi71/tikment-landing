import React, {ReactDOM} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class Appp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light 
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>{/*page*/} 
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>{/*section*/}
          <ThemedButton />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Appp />);

export default Appp;