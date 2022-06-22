import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { theme } from "../../../infrastructure/theme";
import { SIZES, COLORS } from "../../../../constants";

const TableComponent = ({
  item,
  onPress,
  selectedTable,
  tableFloor,
  index,
  disabled,
  booked,
  startTime,
  endTime,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 90,
        width: 150,
        backgroundColor:
          selectedTable.id == item.id
            ? theme.colors.brand.primary
            : disabled
            ? COLORS.lightGray1
            : COLORS.white,
        borderWidth: disabled ? 0 : 2,
        borderColor: theme.colors.brand.primary,
        padding: SIZES.padding,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: index != 0 ? 15 : SIZES.padding,
        marginRight: index == tableFloor.tables.length - 1 ? SIZES.padding : 0, //TODO: item . length setup
        borderRadius: SIZES.radius,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily:
            selectedTable.id == item.id || booked
              ? "Poppins_700Bold"
              : "Poppins_400Regular",
          fontSize: selectedTable.id == item.id ? 25 : 20,
          color:
            selectedTable.id == item.id
              ? COLORS.white
              : booked
              ? theme.colors.brand.primary
              : COLORS.black,
        }}
      >
        {item.tableName}
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily:
              selectedTable.id == item.id
                ? "Poppins_500Medium"
                : "Poppins_400Regular",
            color:
              selectedTable.id == item.id
                ? COLORS.white
                : theme.colors.brand.primary,
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {booked
            ? `Booked\n${startTime.format("hh:mm A")} to ${endTime.format(
                "hh:mm A"
              )}`
            : `${item.seatCapacity} ${
                item.seatCapacity > 1 ? "People" : "Person"
              }`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TableComponent;
