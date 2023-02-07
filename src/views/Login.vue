<template>
  <div>
    <div id="particle-wave" ref="particle"></div>
    <el-form :model="form" label-width="120px" :rules="rules">
      <el-form-item label="账号 " prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ParticleWave from 'particle-wave'
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: "请输入正确的账号", trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/, message: "请输入正确的密码", trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {

      if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.form.username)) {
        ElMessage.error('请输入正确的账号')
      }
      if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/.test(this.form.password)) {
        ElMessage.error('请输入正确的密码')
      }
      this.$store.dispatch('users/login').then((res) => {
        // console.log(res.data);
        if (this.form.username === res.data[0].username && this.form.password === res.data[0].password) {
          // console.log(111);
          ElMessage.success('登陆成功')
          // console.log(res.data[0].token);
          this.$store.commit('users/updataToken', res.data[0].token)
          // console.log(1);
          this.$router.push('/index')
      }else {
        if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.form.username) && this.form.username != res.data[0].username) {
          ElMessage.error('账号错误')
        } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/.test(this.form.password) && this.form.password != res.data[0].password) {
          ElMessage.error('密码错误')
        }
          ElMessage.error('登录失败')
        }
      })
    }
  },
  mounted() {
    const pointSize = 4

    const pw = new ParticleWave(this.$refs.particle, {
      uniforms: {
        size: { type: 'float', value: pointSize },
        field: { type: 'vec3', value: [0, 0, 0] },
        speed: { type: 'float', value: 7 }
      },
      onResize(w, h, dpi) {
        const position = []
        const color = []
        const width = 400 * (w / h)
        const depth = 500
        const height = 7
        const distance = 9
        for (let x = 0; x < width; x += distance) {
          for (let z = 0; z < depth; z += distance) {
            position.push(-width / 2 + x, -30, -depth / 2 + z)
            color.push(0, 1 - (x / width) * 1, 0.5 + x / width * 0.5, z / depth)
          }
        }
        if (this.uniforms) {
          this.uniforms.field = [width, height, depth]
          this.uniforms.size = (h / 400) * pointSize * dpi
        }
        if (this.buffers) {
          this.buffers.position = position
          this.buffers.color = color
        }
      }
    })
  }

}



</script>

<style scoped>
.el-form {
  width: 500px;
  margin: 0 auto;
  position: relative;
  top: 100px;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
}

.el-button {
  width: 100%;
}

#particle-wave {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #1E1D46;
  z-index: -1;
}
</style>