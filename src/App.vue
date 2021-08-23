<template>
    <div v-if="isShow">
        <!-- 
        - Đây sử dụng ref này
        - Sử dụng props: truyền dữ liệu từ component cha sang componet con nhá !

     -->
        <HelloWorld ref="hello" :titeNameNhe=namesss @DoNhaEmit="emitNha()" />
        <!--nếu mà viết như trên là kiểu v-bind khi mà namesss thay đổi thì titeNameNhe cũng thay đổi theo còn viết theo kiểu dưới thì là cố định là " Xinh gái quá đê"
                titeNameNhe= "Xinh gái quá đê " 
        
    -->

        <!-- Ví dụ về v-bind  -->
        <div :class=" {colorToggle: number  === 70 } "> Số liệu: {{number }}</div>
        <!-- Hoặc có kiểu viết kiểu khác là 
        - có thể thuộc kiểu true false bình thường như :class = "{ colorToggle: true}"
        - có thể thuộc kiểu :class="{ active: isActive, 'text-danger': hasError }" 1 nhóm các class chứ không phải chỉ chứa 1
    -->
        <button @click="changeNumber($event)"> ChangeNumber </button>

        <!-- Nếu mà ta không gì ở đây mặc định nó default -->
        <button @click="testRef($event)"> TestRefComponet</button>



        <!-- Cần phải phân biệt giữa v-if và v-show
        - v-if: thì là nó đúng nó sẽ hiển thị
        - v-show: nó render( hiển thị) ra rồi nhưng mà do thuộc tính style nó ẩn đi thôi chứ thực chất nó vẫn ở đấy 

        Đã lấy ví dụ để xem ở bên dưới là xem ở Elements của trình duyệt để thấy được sự khác biệt này
    -->
        <div v-if="isClass" class="card" @mousemove="changeXY">
            X tọa độ là: {{X}} <br>
            Y tọa độ là: {{Y}}

        </div>
        <div v-show="isClass" class="card"> </div>

        <!-- Cái này dùng để test xem nhúng được bootstrap chưa thôi -->
        <!-- Nhưng nó chưa hỗ trợ hết cho vue 3 hay sao ấy (stackoverflow) -->
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-4">xinh gái</div>
                <div class="col-md-4">xinh gái 2</div>
                <div class="col-md-4">xinh gái 3</div>
            </div>
        </div>
    </div>

    <BaseDialog v-if="isShowBaseDialog" @cancelssss ="changBasicDialog()">
        <!-- Có thể đặt thứ tự linh tinh cũng được -->
        <template v-slot:footer >
            <h1>Dữ liệu từ Appp nha footer</h1>
        </template>
        <template v-slot:headerrrr>
            <h1>Dữ liệu từ App nha Header</h1>
        </template>

        <!-- còn nếu mặc định nó không trong template nào thì nó ở trong cái BasicDialog có mỗi chữ <slot/> -->
        <h1>Thế nhé slot không ở trong các template nào</h1>
        <button @click= " changBasicDialog()">XinhgaiApp</button>
        <br>
        <br>
        
    </BaseDialog>
    <button @click= " changBasicDialog()">Toggle</button>

</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import BaseDialog from './components/BaseDialog.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            BaseDialog
        },
        data() {
            return {
                number: 20,
                isClass: false,
                X: 0,
                Y: 0,
                namesss: "hoaoooooooooo",
                isShow: false,
                isShowBaseDialog: false,
            }
        },
        methods: {
            changeNumber() {
                //Đây là toán tử 3 ngôi, nếu number bằng 20  ( có thể viết là this.number ==20 cũng được dấu (===) là so sánh cả kiểu loại nữa searchgoogle sẽ rõ)
                //nếu mà đúng thì giá trị number sẽ thay bằng 70, còn sai nó sẽ là 20
                this.number === 20 ? this.number = 70 : this.number = 20;


                this.isClass = !this.isClass;

                console.log("Kích change Number : ", this.number);
            },
            testRef(event) {
                console.log(" event", event);
                console.log(this.$refs.hello);
                console.log("Giá trị từ component HelloWord con nha: ", this.$refs.hello.fullName);

                // Test thử kích vào testRef thì nó làm thay đổi this.namesss cũng làm thay đổi titeNameNhe trong component con luôn nhá
                this.namesss == "changesssssss" ? this.namesss = "hoaoooooooooo" : this.namesss = "changesssssss";
            },
            changeXY(event) {
                console.log(" đi vào Ô vuông v-if đúng", event);
                // offsetX cái tên kiểu như này là lấy ở trong cosole.log đấy nhá
                this.X = event.offsetX;
                this.Y = event.offsetY;
            },
            emitNha() {
                alert("truyền emit từ con sang cha");
            },
            changBasicDialog(){
                this.isShowBaseDialog = !this.isShowBaseDialog;
                console.log( this.isShowBaseDialog);
            },
            changeToggle(){

            }
        },
    }
</script>

<style scoped>
    .colorToggle {
        background-color: red;
    }

    .card {
        border: 1px solid green;
        background-color: papayawhip;
        width: 200px;
        height: 100px;
    }
</style>