import cloudFunction from '@/client/cloudFunction'

const state = {
  studentDetails: {},
  students: []
}
const actions = {
  async verifyUserLogin ({ commit }, params) {
    const res = await cloudFunction.verifyUserLogin(params)
    commit('SET_STUDENT_DETAILS', res.data)
    return res
  },
  async setPassword ({ commit }, params) {
    await cloudFunction.setPassword(params)
  },
  async fetchAllStudents ({ commit }) {
    commit('SET_ALL_STUDENT', await cloudFunction.getAllStudents())
  }
}
const mutations = {
  SET_STUDENT_DETAILS: (state, payload) => {
    state.studentDetails = payload
  },
  SET_ALL_STUDENT: (state, payload) => {
    state.students = payload
  }
}
const getters = {
  getStudentDetails: (state) => state.studentDetails,
  getAllStudents: (state) => state.students
}
export default {
  state,
  actions,
  mutations,
  getters
}