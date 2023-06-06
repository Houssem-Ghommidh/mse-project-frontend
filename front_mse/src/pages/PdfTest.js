import React from 'react';
import { Page, Document, Text, StyleSheet, View, } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'right',
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    width: "60%",
  },
  xyz: {
    width: "40%",
  },
  footer: {
    fontSize: 12,
    marginTop: 30,
    paddingTop: 10,
    textAlign: 'center',
    borderTop: '1px solid #ccc',
  },
});

const Invoice = ({ invoiceData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Invoice</Text>
        <View style={styles.tableContainer}>
    {/*<TableHeader />*/}
    <View style={styles.row} >
      <Text style={styles.description}>Logo</Text>
      <Text style={styles.xyz}>Second Logo</Text>
    </View>
    {/*<TableFooter items={data.items} />*/}
  </View>
        <Text style={styles.header}>Invoice Number: {invoiceData.invoiceNumber}</Text>
        <Text style={styles.header}>Date: {invoiceData.date}</Text>
        {/* Render the invoice details */}
        {/* For example: */}
        <Text>Customer: {invoiceData.customerName}</Text>
        <Text>Amount: {invoiceData.amount}</Text>
        {/* ...and so on */}
        <Text style={styles.footer}>Thank you for your business!</Text>
      </Page>
    </Document>
  );
};

export default Invoice;
