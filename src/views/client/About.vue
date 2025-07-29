<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-6 rounded-xl">
          <v-row align="center">
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="150">
                <v-img
                  src="https://avatars.githubusercontent.com/u/00000000?v=4"
                  alt="Author avatar"
                />
              </v-avatar>
            </v-col>

            <v-col cols="12" md="8">
              <h1 class="text-h4 font-weight-bold mb-2">Giới thiệu về tôi</h1>
              <p class="text-body-1 text-medium-emphasis">
                Tôi là một lập trình viên full-stack với niềm đam mê về phát triển web và xây dựng sản phẩm số. Tôi có kinh nghiệm với Vue.js, React, Node.js, MongoDB và luôn mong muốn học hỏi công nghệ mới. 
              </p>
            </v-col>
          </v-row>

          <v-divider class="my-6" />

          <div class="mb-4">
            <h2 class="text-h5 font-weight-medium mb-2">Sứ mệnh</h2>
            <p class="text-body-1">
              Sứ mệnh của tôi là tạo ra những trải nghiệm web chất lượng, dễ sử dụng và có giá trị thực tế cho người dùng. Tôi tin rằng công nghệ có thể giúp cuộc sống tốt hơn mỗi ngày.
            </p>
          </div>

          <div class="mb-4">
            <h2 class="text-h5 font-weight-medium mb-2">Giá trị cốt lõi</h2>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-icon><v-icon color="primary">mdi-star-circle</v-icon></v-list-item-icon>
                <v-list-item-title>Chất lượng & Tinh gọn</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="success">mdi-lightbulb-on-outline</v-icon></v-list-item-icon>
                <v-list-item-title>Học hỏi liên tục</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="info">mdi-account-heart-outline</v-icon></v-list-item-icon>
                <v-list-item-title>Đặt người dùng làm trung tâm</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>

          <div>
            <h2 class="text-h5 font-weight-medium mb-2">Liên hệ</h2>
            <p class="text-body-1 mb-2">Nếu bạn muốn kết nối, hãy liên hệ với tôi qua:</p>
            <v-btn
              icon
              href="https://github.com/your-profile"
              target="_blank"
              variant="plain"
            >
              <v-icon size="28" color="black">mdi-github</v-icon>
            </v-btn>
            <v-btn
              icon
              href="mailto:youremail@example.com"
              variant="plain"
            >
              <v-icon size="28" color="red">mdi-email</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              variant="plain"
            >
              <v-icon size="28" color="blue-darken-1">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Không cần logic JavaScript cho trang About đơn giản
</script>
