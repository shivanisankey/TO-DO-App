
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
  },

  listContent: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#818CF8',
    marginBottom: 8,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },

  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 6,
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#25264D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerIconText: {
    color: '#A78BFA',
    fontSize: 30,
    fontWeight: 'bold',
  },

  // Statistics
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#17243A',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#26364E',
  },

  statIcon: {
    fontSize: 24,
    color: '#60A5FA',
    marginBottom: 10,
  },

  statIconGreen: {
    fontSize: 24,
    color: '#34D399',
    marginBottom: 10,
  },

  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },

  statLabel: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 4,
  },

  // Progress
  progressCard: {
    backgroundColor: '#17243A',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#26364E',
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  progressTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F8FAFC',
  },

  progressPercentage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A78BFA',
  },

  progressTrack: {
    height: 8,
    backgroundColor: '#334155',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: 8,
    backgroundColor: '#8B5CF6',
    borderRadius: 10,
  },

  progressSubtitle: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 10,
  },

  // Add Task
  inputCard: {
    backgroundColor: '#17243A',
    borderRadius: 16,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#26364E',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F8FAFC',
  },

  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#0B1120',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: '#F8FAFC',
  },

  addButton: {
    width: 52,
    backgroundColor: '#7C3AED',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '400',
  },

  // Task List
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  taskCount: {
    fontSize: 13,
    color: '#94A3B8',
  },

  // Filters
  filterContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },

  filterButton: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#17243A',
    borderWidth: 1,
    borderColor: '#26364E',
  },

  activeFilterButton: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },

  filterText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },

  activeFilterText: {
    color: '#FFFFFF',
  },

  // Individual Task
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17243A',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#26364E',
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCheckbox: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  taskTitle: {
    flex: 1,
    fontSize: 15,
    color: '#E2E8F0',
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: '#64748B',
  },

  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: '#3B1F2B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  deleteButtonText: {
    color: '#F87171',
    fontSize: 24,
    lineHeight: 27,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 45,
  },

  emptyIcon: {
    color: '#8B5CF6',
    fontSize: 38,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
