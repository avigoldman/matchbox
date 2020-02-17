import React from 'react';
import Heading from '../Heading';
import styles from './TokenTable.module.scss';
import TokenUsage from './TokenUsage';

function TokenTable(props) {
  const [usageType, setType] = React.useState('javascript');

  function handleTypeSelect(e) {
    setType(e.target.value);
  }

  function renderTokenRow(token, i) {
    const cells = props.columns.map(type => {
      let cell = token[type];

      if (type === 'usage') {
        cell = <TokenUsage usage={token[usageType] || token.value} />;
      }

      return (
        <td key={type} className={styles[type]}>
          {cell}
        </td>
      );
    });

    return <tr key={`${token.name}-${i}`}>{cells}</tr>;
  }

  return (
    <div>
      <div className={styles.Header}>
        <Heading as="h4">{props.title || 'Tokens'}</Heading>
        <div>
          <select onChange={handleTypeSelect} value={usageType}>
            <option value="javascript">Javascript</option>
            <option value="scss">Scss</option>
            <option value="css">CSS</option>
          </select>
        </div>
      </div>
      <table className={styles.TokenTable}>
        <tbody>{props.tokens.map(renderTokenRow)}</tbody>
      </table>
    </div>
  );
}

export default TokenTable;