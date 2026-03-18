import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function Index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return;

    const newTask = {
      id: Date.now().toString(),
      text: task,
      priority: task.toLowerCase().includes("tomorrow") ? "HIGH" : "MEDIUM"
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f8fafc' }}>

      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 5 }}>
        FlowMate AI
      </Text>

      <Text style={{ color: 'gray', marginBottom: 20 }}>
        Smart task manager
      </Text>

      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="What do you need to do?"
        style={{
          borderWidth: 1,
          borderColor: '#e2e8f0',
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
          backgroundColor: 'white'
        }}
      />

      <TouchableOpacity
        onPress={addTask}
        style={{
          backgroundColor: '#2563eb',
          padding: 12,
          borderRadius: 10,
          marginBottom: 20
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Add Task
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 5,
              elevation: 2
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              {item.text}
            </Text>

            <Text
              style={{
                marginTop: 5,
                color: item.priority === 'HIGH' ? 'red' : 'orange'
              }}
            >
              {item.priority}
            </Text>
          </View>
        )}
      />

    </View>
  );
}