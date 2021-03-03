import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { CodeBlock } from '@sparkpost/matchbox';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('bash', bash);

const codeSnippet = `curl -X POST
https://api.sparkpost.com/api/v1/transmissions
-H "Authorization: api-key-here"
-H "Content-Type: application/json"
-d '{
  "options": {
    "sandbox": true
  },
  "content": {
    "from": "from@email.com",
    "subject": "Thundercats are GO!!!",
    "text": "Sword of Omens, give me sight BEYOND sight"
  },
  "recipients": [{ "address": "email address here" }]
}'`;

export default {
  title: 'Utility|CodeBlock',
};

export const Chevrons = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock code={codeSnippet} />
));

export const Numbers = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered code={codeSnippet} />
));

export const Height = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered height={150} code={codeSnippet} />
));

export const Dark = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered dark code={codeSnippet} />
));

export const SyntaxHighlightingDemo = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered code={codeSnippet}>
    <SyntaxHighlighter
      PreTag={React.Fragment}
      CodeTag={React.Fragment}
      language="bash"
      style={docco}
    />
  </CodeBlock>
));