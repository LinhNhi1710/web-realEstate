<template>
  <CommonLayout>
    <div class="wrapper">
      <div class="container1">
        <div class="imageBox">
          <h4>Tìm nhà đất</h4>
          <h4>CityAHomes dẫn lối</h4>
        </div>
        <form @submit.prevent="onSubmit" class="form-style">
          <h5>Xin chào bạn!</h5>
          <h3>Đăng ký để tiếp tục</h3>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập họ và tên"
              v-model="newUser.name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập số điện thoại"
              v-model="newUser.phone"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập email"
              v-model="newUser.email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Nhập mật khẩu"
              v-model="newUser.password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Nhập lại mật khẩu"
              v-model="newUser.confirmPassword"
            />
          </div>
          <button type="submit" class="loginButton">Đăng ký</button>
          <h6 style="margin-top: 10px">
            Bạn đã có tài khoản?
            <router-link
              style="text-decoration: underline; color: red"
              to="/login"
              >Đăng nhập</router-link
            >
          </h6>
        </form>
      </div>
    </div>
  </CommonLayout>
</template>

<script>
import { AuthService } from "@/services/auth2.service";
export default {
  name: "RegisterView",
  components: {
    CommonLayout,
  },
  data() {
    return {
      newUser: {
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.register();
      }
    },
    register() {
      AuthService.register({
        ho_ten: this.newUser.name,
        so_dien_thoai: this.newUser.phone,
        email: this.newUser.email,
        mat_khau: this.newUser.password,
        ngay_sinh: "1999-01-01",
        cccd: ("123456789" + Math.floor(Math.random() * 1000)).toString(),
        trang_thai: 1,
        is_admin: 0,
        is_employee: 0,
      })
        .then((res) => {
          this.$notification.success({
            message: "Đăng ký tài khoản thành công",
          });
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/sharedCssLoginRes.css";

.form-style {
  padding: 20px;
}
</style>
