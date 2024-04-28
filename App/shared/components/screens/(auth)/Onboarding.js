import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

GoogleSignin.configure({
    webClientId: '226116499099-b1tu462e0b3qdoq8qlvo0lk549nnn27l.apps.googleusercontent.com',
});

const LoginScreen = ({ navigation }) => {
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return () => subscriber();
    }, []);

    const onAuthStateChanged = (user) => {
        console.log("auth changed", user);
        if (user) {
            navigation.navigate('Home');
        }
    };

    const handleGoogleLogin = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
    };

    return (
      
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>

<View className='flex-1 bg-white'>
    <Image source={require('../assets/loginscreen.jpg')} className='w-full h-[400px] object-contain' />

      <View className='p-8 bg-white mt-[-20px] rounded-3xl'>
      <Image 
        source={require('../assets/csdv2Logowithtitle.png')}
        className='w-[50px] h-[50px] object-contain self-center'  
      />
        <Text className='text-[24px] text-center font-bold'>Welcome to our Community</Text>
        <Text className='text-[14px] text-center text-slate-500  mt-2'>Thanks For Choosing us.</Text>
        <Text className='text-[14px] text-center text-slate-500'>Let's Build your business online today..!</Text>
       

        <TouchableOpacity>
          <Text onPress={handleGoogleLogin}  className='bg-teal-700 rounded-md p-3  mt-5 text-[20px] text-center font-bold text-white  px-22' >Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text onPress={() => console.log("Sign up ")} className='text-[15px] text-center font-bold text-teal-700 mt-5' >Sign up</Text>
        </TouchableOpacity>
        <Text className='text-[10px] text-center font-bold text-gray-700 '>Create your account ? </Text>

      </View>
    </View>


            
        </SafeAreaView>
    );
};

export default LoginScreen;