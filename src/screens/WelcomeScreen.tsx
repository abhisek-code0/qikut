import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primaryBlackHex} />
      <Image source={require("../assets/qikut_transparent.png")} style={styles.logo} />
      <Image source={require("../assets/man.png")} style={styles.bannerImage} />
      <Text style={styles.subTitle1}>
        Welcome to 
      </Text>
      <Text style={styles.title}>qikut.</Text>
      <Text style={styles.subTitle2}>
        The smart and handy app to manage all your Salon's and Services Anytime, Anywhere!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.btn },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 250,
    marginVertical: 10,
  },
  bannerImage: {
    marginVertical: 0,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.white,
    marginTop: 0,
  },
  subTitle1: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.Medium,
    marginTop: 30,
  },
  subTitle2: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.Medium,
    marginVertical: 0,
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.btn,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: colors.white,
  },
});