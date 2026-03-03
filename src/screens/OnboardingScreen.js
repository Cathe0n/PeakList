import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: 'intro',
    title: 'PEAKLIST',
    text: "Your personal motivator!",
    image: require('../../assets/slide1.png'),
  },
  {
    key: 'manage',
    title: 'Manage your tasks',
    text: 'You can easily manage all of your daily tasks in PeakList for free',
    image: require('../../assets/slide2.png'),
  },
  {
    key: 'create',
    title: 'Create daily routine',
    text: 'In PeakList you can create your personalized routine to stay productive',
    image: require('../../assets/slide3.png'),
  },
  {
    key: 'organize',
    title: 'Organize your tasks',
    text: 'You can organize your daily tasks by adding your tasks into separate categories',
    image: require('../../assets/slide4.png'),
  },
  {
    key: 'level',
    title: 'Level up your Waifu',
    text: 'Your Waifu will want you to help her level up!',
    image: require('../../assets/slide5.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.slideTitle}>{item.title}</Text>
      {item.text ? <Text style={styles.slideText}>{item.text}</Text> : null}
    </View>
  );

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      ref.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Login');
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      ref.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const skip = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={skip} style={styles.skipBtn}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>

      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={ref}
      />

      <View style={styles.footer}>        
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={goBack} style={styles.backBtn}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
        <TouchableOpacity onPress={goNext} style={styles.nextBtn}>
          <Text style={styles.nextText}>{currentIndex === slides.length - 1 ? 'GET STARTED' : 'NEXT'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  skipBtn: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  skipText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 40,
  },
  slideTitle: {
    color: Colors.textMain,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  slideText: {
    color: Colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
  },
  backBtn: {
    padding: 10,
  },
  backText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  nextBtn: {
    padding: 10,
  },
  nextText: {
    color: Colors.primaryActive,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;