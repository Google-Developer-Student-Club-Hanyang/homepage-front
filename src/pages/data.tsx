import { useState } from 'react';
import * as React from 'react';

export type ActivityType = {
    icon: string
    title: string
    content: string
}

const ActivityList = [
    {
        icon: "🎤",
        title: "기술 세미나",
        content: "특정 주제에 대해 관심이 많은 사람 혹은 전문가를 초청해 설명을 듣는 시간입니다. 평소에 접하기 어려운 최신 기술 트렌드나 복잡한 시스템의 설계 방식을 알아볼 수 있습니다."
    },
    {
        icon: "📚",
        title: "기술 스터디",
        content: "어떤 기술에 대해 배우고 싶은 사람, 가르쳐주고 싶은 사람들이 모여 같이 공부하고 의견을 나눕니다. 관심 있는 분야가 있다면 누구나 스터디를 개설할 수 있습니다."
    },
    {
        icon: "👥",
        title: "토이 프로젝트",
        content: "자기가 가진 기술을 바탕으로 여러 사람들과 협력하여 실제 프로그램을 개발합니다. 평소에 아이디어만 갖고 있었거나 혼자 하기 어려웠던 프로젝트를 실제로 구현할 수 있습니다."
    },
    {
        icon: "🔥",
        title: "솔루션 챌린지",
        content: "​Solution Challenge는 GDSC 소속 학생 한 명을 포함한 대학생 팀이 하나 이상의 Google 제품 혹은 플랫폼을 사용해 UN의 17가지 지속가능발전목표에 대한 솔루션을 개발하도록 하는 연례 대회입니다."
    },
    {
        icon: "🌎",
        title: "해커톤",
        content: "교내 및 다른 대학교 학생들과 함께 온라인, 오프라인 으로 해커톤을 진행하며 짧은시간동안 결과물을 내기 위한 협업을 경험 해볼 수 있습니다."   
    },
    {
        icon: "🍔",
        title: "기타 자율활동",
        content: "평소에 하고싶었지만 혼자 하기 어려웠던 것들을 다른 사람들과 주제 상관없이 자유롭게 진행할 수 있습니다. 맛집 탐방, 여행 등등 동아리 멤버들과 여러 활동을 즐겨보세요!"
    }
]

const CircleList = [
    {
        title: "관련 직무로 진출할 학생",
        content: "개발자 및 디자이너로 취업 준비를 하거나, 창업을 위해 팀원을 구하고 있는 학생"
    },
    {
        title: "열정이 가득한 학생",
        content: "기술적인 이해도가 있거나, 개발에 열정을 가지고 있는 학생"
    },
    {
        title: "전공 및 학년 무관",
        content: "졸업 잔여 학기 2학기 이상 남은 한양대학교(서울) 재학생 및 휴학생"
    }
]

const SocialList = [
    {
        img: "instagram",
        name: "인스타그램",
        account: "@gdsc_hanyang"
    },
    {
        img: "facebook",
        name: "페이스북",
        account: "@gdsc_hanyang"
    },
    {
        img: "kakaotalk",
        name: "카카오톡",
        account: "@gdsc_hanyang"
    }
]
export { ActivityList, CircleList, SocialList };