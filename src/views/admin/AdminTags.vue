<template>
  <div class="admin-tags">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>标签管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-button type="primary" @click="addTag">添加标签</el-button>
      <el-table :data="tagsData" stripe style="width: 100%">
        <el-table-column type="index" label="#" width="100"></el-table-column>
        <el-table-column prop="type" label="标签"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="updateTagData(scope.row)"></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteTagData(scope.row._id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加标签对话框 -->
    <el-dialog title="添加标签" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="newTag"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewtag">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 更新标签的对话框 -->
    <el-dialog title="更新标签" :visible.sync="updateDialogVisible" width="30%">
      <el-input v-model="updateTag.type"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateNewTag">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import getCategoryData from "../../network/category/getCategoryData";
import addTag from "../../network/category/addTag";
import deleteTag from "../../network/category/deleteTag";
import updateTag from '../../network/category/updateTag'
export default {
  name: "AdminTags",
  data() {
    return {
      newTag: "",
      tagsData: [],
      //控制添加标签对话框显示
      dialogVisible: false,
      updateTag:'',
      updateDialogVisible:false,
    };
  },
  methods: {
    addTag() {
      this.dialogVisible = true;
      this.newTag = "";
    },
    // 请求所有标签信息
    getTags() {
      getCategoryData().then((res) => {
        console.log(res);
        this.tagsData = res.data;
      });
    },
    //添加新标签
    addNewtag() {
      // console.log(this.newTag)
      addTag(this.newTag).then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          this.getTags();
          this.$message({
            message: "添加标签成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "添加标签失败",
            type: "warning",
          });
        }
      });
      this.dialogVisible = false;
    },
    //删除标签
    deleteTagData(tag) {
      this.$confirm("此操作将会删除该标签下的所有文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteTag(tag).then((res) => {
          if(res.data.status == 200){
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            console.log(res);
            this.getTags();
          }
          else{
            this.$message({
            message: '删除失败',
            type: 'warning'
        });
          }
          
        });
      });
    },

    updateTagData(data){
      this.updateTag = data
      this.updateDialogVisible =true
      console.log(data)
    },
    updateNewTag(){
      updateTag(this.updateTag._id,this.updateTag).then(res=>{
        if(res.data.status == 200){
          this.$message({
            message:'更新成功',
            type:'success'
          })
          this.getTags();
        }
        else{
          this.$message({
          message: '更新文章失败',
          type: 'warning'
           })
        }
      })
      this.updateDialogVisible =false
    }
  },
  created(){
    this.getTags();
  },
};
</script>


<style lang="scss" scoped>
.el-input {
  margin-top: 10px;
}
</style>