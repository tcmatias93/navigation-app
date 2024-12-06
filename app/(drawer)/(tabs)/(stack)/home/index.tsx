import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 pt-5">
        <CustomButton
          onPress={() => router.push("/products")}
          className="mb-2"
          color="primary"
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          onPress={() => router.push("/profile")}
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          onPress={() => router.push("/settings")}
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href={"/products"} asChild>
          <CustomButton className="mb-10" color="primary" variant="text-only">
            Products
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>

        {/* <Link className="mb-5" href={"/products"}>
          Productos
        </Link>
        <Link className="mb-5" href={"/profile"}>
          Perfil
        </Link>
        <Link className="mb-5" href={"/settings"}>
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
