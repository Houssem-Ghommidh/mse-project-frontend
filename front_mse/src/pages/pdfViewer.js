import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './PdfTest';

const PdfTest = () => {
  const invoiceData = {
    invoiceNumber: 'INV-001',
    date: '2023-06-06',
    customerName: 'John Doe',
    amount: '$100'
  };

  return (
    <div>
   <table>
  <tr>
    <th>logo </th>
  </tr>
  <tr>
    <td>test</td>
    <td>test2</td>
    <td>test3</td>
    <td>test4</td>
    <td>test5</td>
    <td>test6</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
    </div>
  );
};

export default PdfTest;
