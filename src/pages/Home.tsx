import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {	
		const newTask = {
			id: new Date().getTime(),
			title: newTaskTitle,
			done: false
		};

    setTasks([...tasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const filteredTasks = tasks.map(task =>
			task.id === id ? { ...task, done: !task.done } : task
		);
		setTasks(filteredTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((value) => value.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})