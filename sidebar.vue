<template>
  <div>
    <b-button v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-footer" sidebar-class="border-left border-danger" shadow="sm" no-header right>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
         <b-button size="sm" variant="secondary" @click="hide" style="position: absolute;display:block;top:50vh;left:-37px">
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
