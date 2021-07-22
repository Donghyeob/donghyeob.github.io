const projectText = [
  {
    vista: {
      title: 'vista',
      date: '2018.01 ~ ',
      contents: '국내의 의료정보시스템은 통합되지 않아서 진료 자료 등을 각 병원에서 관리하여 환자가 다른 병원에서 진료 시 이전 병원에서 요청하거나 다시 검사를 하는 등 환자의 시간 및 비용을 허비시키는 경우가 많아서 진료정보를 통합하여 관리하는 미국의 의료정보시스템을 국내에 도입하는 프로젝트.',
      position: 'server',
      frontEnd: '',
      backEnd: 'mumps',
      db: 'gt.m',
      result: '미국의 의료정보시스템을 국내에 구성, 시스템의 한글화 작업 완료, KIAT 점검 통과',
    },
    mubby: {
      title: '무삐',
      date: '2019.05 ~ ',
      contents: 'IoT 기기에서 음성입력을 이용하여 입력된 음성을 서버에서 api로 처리하여 대화와 학습이 가능한 장치를 구현하는 프로젝트.',
      position: 'monitoring, refactoring',
      frontEnd: '',
      backEnd: 'python, linux',
      db: '',
      result: '서버 안정성 향상, 모니터링 개선',
    },
    webpage: {
      title: '웹 페이지',
      date: '2019.06 ~ 2020.02',
      contents: '회사 및 제품의 정보를 제공하는 웹 서비스 구현 - 수상에스티(renewal), 무삐, 에이티솔루션, 스마트수조',
      position: 'front-end',
      frontEnd: 'HTML, CSS, Vanilla JS, PHP, axios',
      backEnd: 'PHP',
      db: '',
      result: '현재 서비스 중',
    },
    mockchart: {
      title: '교육용 의료차트 서비스',
      date: '2019.06 ~ 2019.09',
      contents: '간호 실습생이 실습을 나가서 실제 의료정보가 담긴 차트를 자세하게 보거나 조작하기는 쉽지 않은데 차트는 모두가 환자에 대한 개인정보이기 때문이다. 이 문제를 해결하기 위해 모의차트로 구성된 문제은행 형식의 웹 서비스를 제공함으로써 간호 실습생의 학습 역량을 끌어올리기 위한 프로젝트.',
      position: 'front-end',
      frontEnd: 'HTML, CSS, Vanilla JS, axios',
      backEnd: 'Node.js(Express)',
      db: 'mysql',
      result: '석사 졸업논문 제출',
    },
    imagesend: {
      title: '이미지 전송 서버',
      date: '2020.03 ~ 2020.03',
      contents: '브라우저에서 이미지 선택 후 전송하면 웹서버에서 이미지에 대한 리사이징 후 IoT 기기로 전송하여 화면을 출력하는 프로젝트.',
      position: 'front-end & back-end',
      frontEnd: 'HTML, CSS, Vanilla JS, axios',
      backEnd: 'Node.js(Express, filesystem, sharp)',
      db: '',
      result: 'IoT기기로 정상적인 이미지 전송 및 출력 확인',
    },
    skhynix: {
      title: '연구시료관리 시스템',
      date: '2020.09 ~ 2020.12.31',
      contents: 'SKHynix 내부 반도체 공정의 자재 모니터링 및 흐름을 관리하는 시스템.',
      position: 'front-end, infra',
      frontEnd: 'JSP, Jquery, easyui, ajax',
      backEnd: 'spring legacy, apache, tomcat',
      db: 'oracle',
      result: '기존 구축한 서버로 계속하여 운영 중',
    },
    testserver: {
      title: '회사 내 자체 서버 연구',
      date: '2021.01 ~ 2021.02',
      contents: '라즈베리파이에 jenkins, docker, k8s를 이용하여 MSA 구현 연구.',
      position: 'server',
      frontEnd: '',
      backEnd: 'docker, k8s, jenkins',
      db: '',
      result: '로컬 환경에서 자동 배포 후 인수인계',
    }
  }
]

export default projectText;