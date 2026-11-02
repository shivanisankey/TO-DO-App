
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  StatusBar,
} from 'react-native';

import styles from './styles';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type FilterType = 'All' | 'Active' | 'Completed';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState<FilterType>('All');

  const nextId = useRef(1);

  const completedCount = tasks.filter(task => task.done).length;
  const activeCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.done;
    if (filter === 'Completed') return task.done;
    return true;
  });

  const addTask = () => {
    const trimmedText = taskText.trim();

    if (!trimmedText) {
      Alert.alert(
        'Empty Task',
        'Please enter a task before clicking Add.',
        [{ text: 'OK' }],
      );
      return;
    }

    const newTask: Task = {
      id: `${Date.now()}-${nextId.current++}`,
      title: trimmedText,
      done: false,
    };

    setTasks(currentTasks => [...currentTasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(currentTasks =>
      currentTasks.filter(task => task.id !== id),
    );
  };

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <Pressable
        style={styles.taskContent}
        onPress={() => toggleTask(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.done && styles.checkedCheckbox,
          ]}
        >
          {item.done && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>

        <Text
          style={[
            styles.taskTitle,
            item.done && styles.completedTask,
          ]}
        >
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        // backgroundColor="#0B1120"
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.eyebrow}>
                  MY WORKSPACE
                </Text>

                <Text style={styles.heading}>
                  My Tasks
                </Text>

                <Text style={styles.subtitle}>
                  Stay focused. Get things done.
                </Text>
              </View>

              <View style={styles.headerIcon}>
                <Text style={styles.headerIconText}>✓</Text>
              </View>
            </View>

            {/* Statistics */}
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statIcon}>▤</Text>
                <Text style={styles.statNumber}>
                  {tasks.length}
                </Text>
                <Text style={styles.statLabel}>
                  Total Tasks
                </Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIconGreen}>✓</Text>
                <Text style={styles.statNumber}>
                  {completedCount}
                </Text>
                <Text style={styles.statLabel}>
                  Completed
                </Text>
              </View>
            </View>

            {/* Progress */}
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>
                  Your Progress
                </Text>

                <Text style={styles.progressPercentage}>
                  {tasks.length > 0
                    ? Math.round(
                        (completedCount / tasks.length) * 100,
                      )
                    : 0}%
                </Text>
              </View>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${
                        tasks.length > 0
                          ? (completedCount / tasks.length) * 100
                          : 0
                      }%`,
                    },
                  ]}
                />
              </View>

              <Text style={styles.progressSubtitle}>
                {activeCount} tasks remaining
              </Text>
            </View>

            {/* Add Task */}
            <View style={styles.inputCard}>
              <Text style={styles.sectionTitle}>
                Add a new task
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="What needs to be done?"
                  placeholderTextColor="#64748B"
                  value={taskText}
                  onChangeText={setTaskText}
                  onSubmitEditing={addTask}
                  returnKeyType="done"
                />

                <Pressable
                  style={styles.addButton}
                  onPress={addTask}
                >
                  <Text style={styles.addButtonText}>
                    +
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* Task List Heading */}
            <View style={styles.listHeader}>
              <Text style={styles.sectionTitle}>
                Your Tasks
              </Text>

              <Text style={styles.taskCount}>
                {filteredTasks.length} items
              </Text>
            </View>

            {/* Filters */}
            <View style={styles.filterContainer}>
              {(['All', 'Active', 'Completed'] as FilterType[]).map(
                item => (
                  <Pressable
                    key={item}
                    style={[
                      styles.filterButton,
                      filter === item &&
                        styles.activeFilterButton,
                    ]}
                    onPress={() => setFilter(item)}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        filter === item &&
                          styles.activeFilterText,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ),
              )}
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>✦</Text>

            <Text style={styles.emptyTitle}>
              {filter === 'All'
                ? 'No tasks yet'
                : `No ${filter.toLowerCase()} tasks`}
            </Text>

            <Text style={styles.emptyText}>
              {filter === 'All'
                ? 'Add your first task and start being productive!'
                : 'Your tasks will appear here.'}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default App;
