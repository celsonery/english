import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  head: [['link', {rel: 'icon', href: '/images/hero.png'}]],
  bundler: viteBundler(),
  base: '/',
  theme: defaultTheme({
    docsRepo: 'https://github.com/celsonery/english',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    sidebarDepth: 2,
    logo: '/images/hero.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      // '/br/': {
      //   selectLanguageName: 'Português BR',
      // },
    },
    sidebar: 
    [
      {
        text: 'Activities',
        collapsible: true,
        children: [
          '/activities/activities.md',
          '/activities/dialogs.md',
          '/activities/texts.md',
        ]
      },
      {
        text: 'Musics',
        collapsible: true,
        children: [
          '/musics/adele-hello.md',
          '/musics/adele-someone_like_you.md',
          '/musics/aha-take_on_me.md',
          '/musics/a_ha-you_are_the_one.md',
          '/musics/alphaville-forever_young.md',
          '/musics/berlim-take_my_breath_away.md',
          '/musics/bruno_mars-when_i_was_your_man.md',
          '/musics/celine_dion-beauty_and_the_beast.md',
          '/musics/celine_dion-my_heart_will_go_on.md',
          '/musics/christina_perry-a_thousand_years.md',
          '/musics/chubby_checker-lets_twist_again.md',
          '/musics/coldplay-clocks.md',
          '/musics/coldplay-in_my_place.md',
          '/musics/coldplay-viva_la_vida.md',
          '/musics/cyndi_lauper-time_after_time.md',
          '/musics/cyndi_lauper-true_colors.md',
          '/musics/depeche_mode-strangelove.md',
          '/musics/dire_straits-brothers_in_arms.md',
          '/musics/dire_straits-money_for_nothing.md',
          '/musics/dire_straits-so_far_away.md',
          '/musics/dire_straits-walk_of_life.md',
          '/musics/dire_straits-why_worry.md',
          '/musics/ed_sheeran-perfect.md',
          '/musics/evanescence-bring_me_to_life.md',
          '/musics/evanescence-lithium.md',
          '/musics/glenn_frey-the_heat_is_on.md',
          '/musics/guns_n_roses-sweet_child_o_mine.md',
          '/musics/jhon_legend-all_of_me.md',
          '/musics/jhon_lennon-imagine.md',
          '/musics/kenny_loggins-footloose.md',
          '/musics/lewis_capaldi-someone_you_loved_en.md',
          '/musics/louis_armstrong-what_a_wonderful_world.md',
          '/musics/men_at_work-overkill.md',
          '/musics/queen-how_can_i_go_on.md',
          '/musics/queen-love_of_my_life.md',
          '/musics/queen-we_are_the_champions.md',
          '/musics/roxette-it_must_have_been_love.md',
          '/musics/roxette-listen_to_your_heart.md',
          '/musics/roxette-spending_my_time.md',
          '/musics/simple_minds-dont_you_forget_about_me.md',
          '/musics/simple_minds-mandela_day.md',
          '/musics/sinead_o_connor-nothing_compares_2u.md',
          '/musics/survivor-eyes_of_the_tiger.md',
          '/musics/tears_for_fears-everybody_wants_to_rule_the_world.md',
          '/musics/tears_for_fears-woman_in_chains.md',
          '/musics/the_cure-boys_dont_cry.md',
          '/musics/the_human_league-human.md',
          '/musics/toni_braxton-how_could_an_angel_break_my_heart.md',
          '/musics/toni_braxton-spanish_guitar.md',
          '/musics/toni_braxton-unbreak_my_heart.md',
          '/musics/u2-angel_of_halem.md',
          '/musics/u2-bad.md',
          '/musics/u2-every_breaking_wave.md',
          '/musics/u2-i_still_havent_found_what_im_looking_for.md',
          '/musics/u2-new_years_day.md',
          '/musics/u2-sunday_bloody_sunday.md',
        ]
      }
    ],
      navbar: [
        {
          text: 'Github',
          link: 'https://github.com/celsonery/english'
        }
      ],
  }),

  locales: {
    '/': {
      lang: 'en-US',
      title: 'This my English Study',
      description: 'Just playing around'
    },
    // '/br/': {
    //   lang:'pt-BR',
    //   title: 'Meu estudo de inglês',
    //   description: 'Meu estudo de inglês'
    // }
  }
})
