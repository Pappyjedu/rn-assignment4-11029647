import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const JobCard = ({ jobTitle, company, salary, location }) => {
  return (
    <View style={styles.jobCard}>
      <View style={styles.companyLogo}>
        <Image
          source={require('./assets/company_logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.companyName}>{company}</Text>
        <View style={styles.salaryLocation}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Homepage</Text>
        <View style={styles.profile}>
          <Image
            source={require('./assets/profile_pic.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{name}</Text>
        </View>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search a job or position"
          style={styles.searchInput}
        />
      </View>
      <ScrollView style={styles.jobsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobCards}>
          <JobCard jobTitle="Software Engineer" company="Facebook" salary="$180,00" location="Accra, Ghana" />
          <JobCard jobTitle="Software Engineer" company="Google" salary="$160,00" location="Accra, Ghana" />
          <JobCard jobTitle="Software Engineer" company="Amazon" salary="$180,00" location="Accra, Ghana" />
          <JobCard jobTitle="Software Engineer" company="Microsoft" salary="$160,00" location="Accra, Ghana" />
          {/* Add more featured job cards here */}
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobCards}>
          <JobCard jobTitle="Jr Executive" company="Burger King" salary="$96,000/y" location="Los Angels, US" />
          <JobCard jobTitle="Product Manager" company="Beats" salary="$84,000/y" location="Florida, US" />
          <JobCard jobTitle="Product Manager" company="Facebook" salary="$86,000/y" location="Florida, US" />
          <JobCard jobTitle="Software Engineer" company="Amazon" salary="$180,00" location="Accra, Ghana" />
          <JobCard jobTitle="Software Engineer" company="Microsoft" salary="$160,00" location="Accra, Ghana" />
          {/* Add more popular job cards here */}
        </View>
      </ScrollView>
    </View>
  );
};

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Navigate to HomeScreen with name and email as parameters
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back 👋</Text>
      <Text style={styles.loginText}>Let's log in. Apply to jobs!</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or continue with</Text>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/apple_logo.png')}
            style={styles.socialLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/google_logo.png')}
            style={styles.socialLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/facebook_logo.png')}
            style={styles.socialLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Haven't an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
  },
  search: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  jobsSection: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  seeAllButtonText: {
    color: '#333',
  },
  jobCards: {
    flexDirection: 'column',
    gap: 10,
  },
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  companyName: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  salaryLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  orText: {
    fontSize: 16,
    color: '#777',
  },
  socialLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLogo: {
    width: 20,
    height: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
  },
  registerLink: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default App;