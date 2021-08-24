<template>
    <div>
        <h1>Hello World</h1>
        <h2>Tên {{fullName}}</h2>
        <h2 style="background-color: green;">Truyền từ Props ( component cha sang): {{ titeNameNhe}}</h2>
        <button @click="clickHelloWord">ButtonHelloWord</button>
        <button @click="testEmit">Button Test Emit</button>
        <button @click="testEmitData">Button Test Emit Data</button>


        <!-- Sử dụng v-for nhá -->
        <br>
        <br>
        <table border="1">
            <tr>
                <td>Số Thứ Tự</td>
                <td>ID</td>
                <td>Tên Quả</td>
                <td>Số lượng</td>
            </tr>
            <tr v-for="(itemssss, indexsss)  in arrayFitterComputed" :key="indexsss">
                <td>{{indexsss + 1}}</td>
                <td>{{itemssss.id }}</td>
                <td>{{itemssss.name}}</td>
                <td>{{itemssss.number }}</td>
            </tr>
        </table>



    </div>
</template>
<script>
    export default {
        data() {
            return {
                fullName: "Phạm Hoài",
                products: [
                    { id: "V1", name: "Quả Táo", number: 200 },
                    { id: "V2", name: "Quả Lê", number: 40 },
                    { id: "V3", name: "Quả Sung", number: 100 },
                    { id: "V4", name: "Quả Táo", number: 50 },
                ]
            }
        },
        props: {
            titeNameNhe: {
                type: String,
                required: true,//Đây là yêu cầu bắt buộc phải có nếu không có thì nó để mặc định là false
            }
        },

        methods: {
            clickHelloWord() {
                console.log("click hello world");
            },
            
            testEmit(){
                this.$emit("doNhaEmit");
            },
            testEmitData(){
                this.$emit("truyenEmitData", { trangthai: true, chu: "Phạm Hoài Nhá" });
            }
        },
        computed: {
            arrayFitterComputed() {
                // Đây là hàm lọc đấy nhớ đấy nhé
                return this.products.filter(item => item.number >= 100);
            }
        }
    }
</script>