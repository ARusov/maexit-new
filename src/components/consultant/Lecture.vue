<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        <!--<h4>-->
        <!--<i class="fas fa-check"></i>-->
        <!---->
        <!--<a><i class="fas fa-edit"></i></a>-->
        <!--<a @click="$emit('delete-lecture')"><i class="fas fa-trash-alt"></i></a>-->
        <!--</h4>-->


        <div class="field has-addons ">
          <div class="control is-expanded">
            <input class="input is-fullwidth"
                   v-bind:class="{'input-wo-bg': this.isReadonly}"
                   type="text" :readonly="this.isReadonly"
                   @blur="makeReadonly()"
                   v-model="lecture.title"/>
          </div>
          <div class="control">
            <a class="is-right" @click="editName()"><i class="fas fa-edit"></i></a>
            <a @click="$emit('delete-lecture')"><i class="fas fa-trash-alt"></i></a>
          </div>
        </div>


      </div>
      <div class="column has-text-right">
        <div>
          <a @click="showVideo()"><i class="fas fa-file-video fa-2x"></i></a>
          <a @click="showFile()"><i class="fas fa-file fa-2x"></i></a>
          <a @click="showDescription()"><i class="fas fa-caret-square-down fa-2x"></i></a>
        </div>
      </div>
    </div>
    <div v-if="isDescription">
      <p>Article:</p>
      <textarea class="textarea is-fullheight" rows="5" placeholder="Lecture Description"
                v-model="lecture.description"></textarea>
    </div>
    <div v-if="isVideo" class="">

      <table class="table is-fullwidth">
        <thead>
        <tr>
          <th>Filename</th>
          <th>Type</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>

          <td>{{this.lecture.videoName}}</td>
          <td>Video</td>
          <td class="has-text-centerd">
            <i v-if="this.isVideoLoading" class="fas fa-spinner fa-pulse"></i>
            <i v-if="this.lecture.videoName!=null" class="fas fa-check"></i>
          </td>
          <td>

            <label class="upload-file">
              <i class="fas fa-plus-circle"/>
              <input accept="video/mp4,video/x-m4v,video/*" type="file" name="file"
                     v-on:change="fileChange($event.target.files,'video')"/>
            </label>

          </td>
        </tr>
        </tbody>
      </table>

    </div>
    <div v-if="isFile" class="file has-name is-right is-fullwidth">
      <table class="table is-fullwidth">
        <thead>
        <tr>
          <th>Filename</th>
          <th>Type</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>

          <td>{{this.lecture.fileName}}</td>
          <td>File</td>
          <td class="has-text-centerd">
            <i v-if="this.fileLoading" class="fas fa-spinner fa-pulse"></i>
            <i v-if="this.lecture.fileName!=null" class="fas fa-check"></i>
          </td>
          <td>

            <label class="upload-file">
              <i class="fas fa-plus-circle"/>
              <input accept="*/*" type="file" name="file"
                     v-on:change="fileChange($event.target.files,'file')"/>
            </label>

          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';

  export default Vue.extend({


    methods: {
      showVideo(){
        this.isFile = false
        this.isDescription = false
        this.isVideo = !this.isVideo
      },
      showFile(){
        this.isFile = !this.isFile
        this.isDescription = false
        this.isVideo = false
      },
      showDescription(){
        this.isFile = false
        this.isDescription = !this.isDescription
        this.isVideo = false
      },
      deleteLecture(){
      },
      editName(){
        this.isReadonly = !this.isReadonly
      },
      makeReadonly(){
        this.isReadonly = true
      },
      //upload
      fileChange(fileList, fileType: string) {
        console.log(fileList)
        if(fileType=="file"){
          this.isFileLoading=true;
          console.log(this.isFileLoading)
        }
        if(fileType=="video"){
          this.isVideoLoading=true;
        }
        this.file.set("file", fileList[0]);
        this.upload(fileType)
        this.isFileLoading=false;
        this.isVideoLoading=false;
      },
      upload(fileType: string) {
        const url = Util.getPublicApiUrl('initcourse/upload/' + fileType);
        axios({method: "POST", "url": url, "data": this.file}).then(result => {
          console.dir(result.data);
          if (result.data.type == "video") {
            this.lecture.videoName = result.data.name;
            this.lecture.videoPath = result.data.path;
          }
          if (result.data.type == "file") {
            this.lecture.fileName = result.data.name;
            this.lecture.filePath = result.data.path;
          }
        }, error => {
          console.error(error);
        });
      }

    },


    data(){
      return {
        isVideo: false,
        isFile: false,
        isDescription: false,
        isReadonly: true,
        file: new FormData(),
        isFileLoading:false,
        isVideoLoading:false,
        isFileDone:false,
        isVideoDone:false,

      }
    },
    computed:{
      fileLoading: function () {
          return this.isFileLoading
      }

    },

    props: ['deleteLectureIn', 'lecture'],


  });
</script>

<style scoped>

  .input-wo-bg {
    /*background-color: pa;*/
    border: none;
  }

  a {
    color: inherit;
  }

  .upload-file {
    position: relative;
    overflow: hidden;
    float: left;
    clear: left;
  }

  .upload-file input[type="file"] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    font-size: 100px;
    filter: alpha(opacity=0);
    cursor: pointer;
  }
  .box{
    border-radius: 0;
  }

</style>
