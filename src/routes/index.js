import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Especifica o modo de histórico
  scrollBehavior(to, from, savedPosition) {
    // Sempre rolar para o topo
    return { top: 0 };
  },
  routes: [
    // Rota para página não encontrada
    // { path: '/:pathMatch(.*)*', component: () => import('../views/Notfound.vue') },
    // Rotas definidas
    { path: '/', component: () => import('../views/List.vue') },
    { path: '/criacao-produto/:id', component: () => import('../views/CriarProduto.vue') },
  ]
});

export default router;
