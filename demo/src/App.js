import React from 'react';
import DatePicker from 'acme-components/DatePicker';

import 'acme-components/theme.css';

function App() {
  return (
    <>

<h1>DatePicker</h1>

<h2>Default usage</h2>

<pre>
{`
import DatePicker from 'acme-components/DatePicker';
<DatePicker />
`}
</pre>

<DatePicker />

<h2>Setting a default value</h2>

<pre>
{`
import DatePicker from 'acme-components/DatePicker';
<DatePicker defaultValue={new Date(2022, 0, 1)} />
`}
</pre>

<DatePicker defaultValue={new Date(2022, 0, 1)} />

<p>The ACME DatePicker is built on top of the KendoReact DatePicker, and you can <a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/">refer to KendoReact’s documentation</a> for additional properties that you can for customization.</p>

    </>
  );
}

export default App;
