// BModal 
//  Properties 
//   scrollable: true

// Dropdown
//  ユーザー名、ログアウトに区切り線を追加
//  <b-dropdown-divider></b-dropdown-divider>

// TagSelect
//  CSS class
//   .badge-select {
//     color: #212529;
//     background-color: #ced4da; 
//   }

// BSidebar 
//  Properties 
//   no-header: true
//   right: true
//   shadow :'sm'
//   bg-variant: 'white'
//  CSS class
//   .sidebar-right-collapse {
//     position: absolute;top:50vh;left:-36px
//   }

// Form Checkbox
// 選択肢が2～4個以内の場合に使用、5個以上はSelect（複数）を使用
// Grouped button style checkboxesを使用
// BFormCheckboxGroup 
//  Properties 
//   size: 'sm'
//   buttons: true
//   button-variant: 'outline-success'
// Form Radio
// 選択肢が4個以内の場合に使用、5個以上はSelect（単一）を使用
<template>
  <div>
    <b-button v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-footer" sidebar-class="border-left border-danger" shadow="sm" no-header right>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
         <b-button size="sm" variant="secondary" @click="hide" style="position: absolute;top:50vh;left:-36px">
           <b-icon icon="arrow-bar-right"></b-icon>
         </b-button>
         <strong class="mr-auto">Footer</strong>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>
