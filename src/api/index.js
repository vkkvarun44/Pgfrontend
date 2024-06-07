import { REST_URL } from '@/api/config'
import axios from 'axios'

const ApiService = {
  init () {
    //Vue.axios.defaults.baseURL = API_URL+REST_URL
  },
  post (apiurl, postValue) {
    var apiRequesturl = REST_URL + apiurl
    return axios.post(apiRequesturl, postValue)
  },

  get (apiurl) {
    var apiRequesturl = REST_URL + apiurl
    return axios.get(apiRequesturl)
  }

}

export default ApiService


export const MarketMovers = {
  getMarketMovers () {
    //prod
    return ApiService.getOpenApi(SERVICES_URL_GCLOUD + 'gateway/simple-api/ms-india/instr/getMarketMovers.json?ms-auth=0000+MarketSmithINDUID-0000000000000+MarketSmithINDUID-0000000000000');
    
    //stage
    // return ApiService.getOpenApi(STAGE_URL + 'gateway/simple-api/ms-india/instr/getMarketMovers.json?ms-auth=0000+MarketSmithINDUID-0000000000000+MarketSmithINDUID-0000000000000');

  },
}
export const StaticPages={
  getPage(slug){
    return ApiService.getOpenApi(BASE_URL+'/aboutus?slug='+slug)
  }
}
export const Product = {
  getProductPage(){
    return ApiService.getOpenApi(BASE_URL+'/product')
  }
}
export const Author = {
  getAuthor (params) {
    return ApiService.getOpenApi('https://msiblog.in/wp-json/v6/author?id=' + params.id);
  },
}

export const Webstories = {
  getWebstories () {
    return ApiService.getOpenApi('https://msiblog.in/wp-json/v6/getmsiwebstories');
  },
}

export const VideoSinglePost = {
  getvideosinglepost (params) {
    return ApiService.getOpenApi('https://msiblog.in/wp-json/v6/videosinglepost?id=' + params.id);
  },
}
export const MsiLearning={
  getWebContentModel(webContent){
    return ApiService.getOpenApi(`${webContent}`)
  },
  getTrademark(){
    return ApiService.getOpenApi(`https://msiblog.in/wp-json/v6/getlearningtrademark?id=trademark`)
  },
  getArticles(){
    return ApiService.getOpenApi(BASE_URL+'/msiarticles')
  },
  getSearchContent({search}){
    return ApiService.getOpenApi(SERVICES_URL_GCLOUD + `gateway/simple-api/ms-india/user/userWebContentSearch.json?webContent=${search}&ms-auth=3990+MarketSmithINDUID-Web0000000000+MarketSmithINDUID-Web0000000000+0+220301022447+-1505470167`)
  },
  getSearchedContentPost(postname){
      return ApiService.getOpenApi(`https://marketsmithindia.com/mstool/partials/learning/${postname}.html`)
  }
}
export const MsiLearningArticle={
  getlearnPostsCatChild({id}){
    return ApiService.getOpenApi(BASE_URL+'/learnpostscatchild?slug='+id)
  }
}
export const NewFeatures={
  getNewFeatures(){
    return ApiService.getOpenApi(BASE_URL+'/newfeatures')
  }
}
export const GetQuestions={
  getQuestions(){
    return ApiService.getOpenApi(BASE_URL+'/getquestions')
  }
}
export const GetQuestionsPost={
  getquestionspost(params){
    console.log(params.id)
    return ApiService.getOpenApi(BASE_URL+'/getquestion?slug=' + params.id)
  }
}
export const LearnPosts={
  getLearnPosts({id}){
    return ApiService.getOpenApi(BASE_URL+'/learnposts?id='+id)
  }
}

export const SearchStock = {
  getSearchStock () {
    return ApiService.getOpenApi(SERVICES_URL_GCLOUD + 'gateway/simple-api/ms-india/instr/srch.json?text=fd&lang=en&listID=-1&ver=2&ms-auth=0000+MarketSmithINDUID-0000000000000+MarketSmithINDUID-0000000000000')
  }
}

export const WisdomResults = {
  getWisdomResults () {
    return ApiService.getOpenApi(SERVICES_URL_GCLOUD + 'gateway/simple-api/ms-india/commentary/en/2/0/8/outlook.json?force=N&explorerId=3&cPostId=0&postType=0&ms-auth=3990+MarketSmithINDUID-Web0000000000+MarketSmithINDUID-Web0000000000+0+201027003154+-1915575659')
    // return ApiService.getwisdomApis(STAGE_URL + '/api/ms-india/getMarketCondition.json');
  }
}

export const SegmentDetails = {
  getSegmentDetails (){
    return axios.get(SERVICES_URL_GCLOUD + '/gateway/simple-api/ms-india/subscription/getSegmentDetails.json?memberId=-1&ms-auth=0000%2BMarketSmithINDUID-0000000000000%2BMarketSmithINDUID-0000000000000').catch(error => {
    })
  }
}
export const ModelPortfolioAlert = {
  getmodelportfolioalert(){
    return ApiService.getMsiApis(SERVICES_URL_MSI + 'api/subscription/2/0/getManualListDetails')
  }
}

export const UpcomingReportandEvents = {
  getupcomingreportandevents(){
    const jwtToken = getJWTFromStorage('MSSESSIONID');
    return ApiService.getMsiApis(SERVICES_URL_GCLOUD + 'gateway/simple-api/ms-india/commentary/getCalenderEvents.json?ms-auth='+jwtToken)
  }
}

export const localstorage = {
  get (localStorageKey) {
    return window.localStorage.getItem(localStorageKey)
  }
}

