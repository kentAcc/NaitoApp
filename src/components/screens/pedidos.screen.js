import React, { useState, useContext, useEffect } from "react";
import { PedidosContext } from "../../services/pedidos/pedidos.context";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { DataTable } from "react-native-paper";
const PedidosScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([6]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const { pedidos, getPedidos, isLoading } = useContext(PedidosContext);
  const [items] = useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      {!isLoading ? (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Teléfono </DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
          </DataTable.Header>

          {pedidos.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.data.nombre}</DataTable.Cell>
              <DataTable.Cell>{item.data.telefono}</DataTable.Cell>
              <DataTable.Cell>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => {
                    navigation.navigate("pedidoInfo", { item });
                  }}
                >
                  <Text style={styles.textStyle}>{item.data.email}</Text>
                </Pressable>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>
      ) : (
        <ActivityIndicator animating={true} color={"red"} />
      )}
    </>
  );
};

export default PedidosScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
