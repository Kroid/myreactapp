import React      from 'react';
import ReactIntl  from 'react-intl';
import ReactMixin from 'react-mixin';

var IntlMixin = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;

class Home extends React.Component {



  render() {
    return (
      <div>
        <h3>home</h3>
        <div>
          <FormattedNumber value={1000} style="currency" currency="USD" />
        </div>
      </div>
    )
  }
}

ReactMixin(IntlMixin.prototype, Home);

export default Home;
