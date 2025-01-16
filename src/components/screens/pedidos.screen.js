import React, { useState, useContext, useEffect } from "react";
import { PedidosContext } from "../../services/pedidos/pedidos.context";
import { StyleSheet, Text, Pressable, Button } from "react-native";
import DatePicker from "react-native-neat-date-picker";

import { DataTable, ActivityIndicator } from "react-native-paper";
const PedidosScreen = ({ navigation }) => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [date, setDate] = useState("");

  const openDatePickerSingle = () => setShowDatePickerSingle(true);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([6]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false);
  };

  const { pedidos, getPedidos, isLoading } = useContext(PedidosContext);

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false);
    // The parameter 'output' is an object containing date and dateString (for single mode). // For range mode, the output contains startDate, startDateString, endDate, and EndDateString

    const date1 = new Date(output.dateString).toLocaleDateString("es-mx", {
      timeZone: "UTC",
    });

    setDate(date1);
  };
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, pedidos.length);
  useEffect(() => {
    setPage(0);

    if (date) GetPedidos(date);
  }, [itemsPerPage, date]);

  const GetPedidos = async (date) => {
    await getPedidos(date);
  };

  return (
    <>
      <Button title={"ver calendario"} onPress={openDatePickerSingle} />
      <DatePicker
        isVisible={showDatePickerSingle}
        mode={"single"}
        onCancel={onCancelSingle}
        onConfirm={onConfirmSingle}
      />
      {pedidos && pedidos.length == 0 && <Text>No hay registros</Text>}
      {!isLoading ? (
        <>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nombre</DataTable.Title>
              <DataTable.Title>Teléfono </DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
            </DataTable.Header>
            {pedidos &&
              pedidos.slice(from, to).map((item) => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>{item.nombre}</DataTable.Cell>
                  <DataTable.Cell>{item.telefono}</DataTable.Cell>
                  <DataTable.Cell>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      onPress={() => {
                        navigation.navigate("pedidoInfo", { item });
                      }}
                    >
                      <Text style={styles.textStyle}>detalle</Text>
                    </Pressable>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            {pedidos && pedidos.length > 0 && (
              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(pedidos.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${pedidos.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={"Renglones por página"}
              />
            )}
          </DataTable>
        </>
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
