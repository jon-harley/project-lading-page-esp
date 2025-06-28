import React from 'react';

interface Comment {
    id: number;
    name: string;
    avatar: string;
    text: string;
    time: string;
    likes: number;
    replies?: Comment[];
}

const commentsData: Comment[] = [
  {
    id: 1,
    name: "Camila Torres",
    avatar: "https://i.pinimg.com/474x/58/91/6f/58916f040da77e4455eac426a174f8c0.jpg",
    text: "Okay... I wasn’t expecting much, but something changed. My ex literally messaged me out of nowhere after weeks. WTH?",
    time: "14 minutes ago",
    likes: 37,
    replies: [
      {
        id: 11,
        name: "Fernanda Sanchez",
        avatar: "https://thumbs.dreamstime.com/b/retrato-de-mulher-colombiana-um-belo-da-196825523.jpg",
        text: "Omg same! It’s like people are suddenly drawn to you. I’m not even doing anything different... just following the steps",
        time: "10 minutes ago",
        likes: 17
      }
    ]
  },
  {
    id: 2,
    name: "Amelia Thomas",
    avatar: "https://www.mulher.com.br/wp-content/uploads/migration/marilena-ramos-1021-1400x2500.jpg",
    text: "I don't usually leave reviews, but this deserves it. I feel more attractive, more in control. Like... people actually see me now",
    time: "40 minutes ago",
    likes: 44,
    replies: []
  },
  {
    id: 3,
    name: "Julia Jackson",
    avatar: "https://i.imgur.com/5Q7DQPK.jpeg",
    text: "I’ve tried all the ‘feminine energy’ stuff before, but this one hit different. I started getting compliments out of nowhere",
    time: "1 hour ago",
    likes: 61,
    replies: [
      {
        id: 31,
        name: "Renata Silveira",
        avatar: "https://i.imgur.com/JYSuvK4.png",
        text: "Girl SAME. I didn’t even change my clothes or makeup and people started flirting more. It’s the energy shift, I swear",
        time: "30 minutes ago",
        likes: 13
      },
      {
        id: 32,
        name: "Charlotte Anderson",
        avatar: "https://i.pinimg.com/474x/0c/92/81/0c92811fa2a962d873137e31c5984669.jpg",
        text: "And don’t get me started on the DMs 😂 I’m not complaining though!",
        time: "20 minutes ago",
        likes: 9
      }
    ]
  },
  {
    id: 4,
    name: "Mia Taylor",
    avatar: "https://i.pinimg.com/originals/14/e2/66/14e266e75e4d4f4fa89fb65ec6be9510.jpg",
    text: "This made me feel like me again. It’s not even about guys… it’s the confidence I got back.",
    time: "2 hours ago",
    likes: 26,
    replies: []
  },
  {
    id: 5,
    name: "Sophia Wilson",
    avatar: "https://i.pinimg.com/originals/2d/60/30/2d60303f0fbfefa209574e47a6f25184.jpg",
    text: "If you're thinking about it, just go for it. I didn’t think it would work either, but here I am... living in my soft era lol",
    time: "5 hours ago",
    likes: 34,
    replies: []
  },
  {
    id: 6,
    name: "Isabella Martinez",
    avatar: "https://i.pinimg.com/474x/0c/92/81/0c92811fa2a962d873137e31c5984669.jpg",
    text: "It didn’t ‘change my life’ instantly, but I started noticing subtle shifts. People approach me more and I feel calmer",
    time: "8 hours ago",
    likes: 19,
    replies: []
  },
  {
    id: 7,
    name: "Olivia Jones",
    avatar: "https://i.pinimg.com/originals/14/e2/66/14e266e75e4d4f4fa89fb65ec6be9510.jpg",
    text: "I used to chase. Not anymore. Now they come to me — and I decide if I even want to reply 😌",
    time: "1 day ago",
    likes: 52,
    replies: [
      {
        id: 71,
        name: "Emily White",
        avatar: "https://i.pinimg.com/originals/2d/60/30/2d60303f0fbfefa209574e47a6f25184.jpg",
        text: "Right?? It’s not just about attraction. You literally start acting different, with zero effort.",
        time: "20 hours ago",
        likes: 12
      }
    ]
  },
  {
    id: 8,
    name: "Ava Davis",
    avatar: "https://i.pinimg.com/1200x/52/1e/c2/521ec2ddd7a7f3c9ad18cb381f3d8b57.jpg",
    text: "Honestly? I was expecting a bit more. It's cute, but maybe I need to stick with it longer",
    time: "1 day ago",
    likes: 7,
    replies: []
  },
  {
    id: 9,
    name: "Jessica Brown",
    avatar: "https://i.pinimg.com/736x/0d/69/76/0d69765af9ecebe39fda9fb8e0474719.jpg",
    text: "It works, but only if you actually do it with intention. If you're just expecting magic without changing your energy, forget it.",
    time: "2 days ago",
    likes: 22,
    replies: [
      {
        id: 91,
        name: "Sarah Miller",
        avatar: "https://i.pinimg.com/736x/9f/89/84/9f898453a33a2fe6f4013f1b597c83e0.jpg",
        text: "Exactly. You gotta feel it. It’s not just about the steps — it’s the mindset.",
        time: "1 day ago",
        likes: 11
      }
    ]
  }
];


const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => {
    return (
        <div className={`flex items-start space-x-4 ${isReply ? 'ml-12' : ''}`}> {/* ml-12 para respostas */}
            <img src={comment.avatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                    <p className="font-bold text-gray-800 text-sm">{comment.name}</p>
                    <p className="text-xs text-gray-400">{comment.time}</p>
                </div>
                <p className="text-sm text-gray-700 leading-snug mb-2">{comment.text}</p>

                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{comment.likes}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};


const CommentsSection: React.FC = () => {
    return (

        <div className="w-full bg-black flex justify-center py-10 px-4 md:px-0">
            <div
                className="w-full shadow-lg rounded-xl p-6
                            max-w-[950px]
                            my-5 mx-4
                            md:my-0 md:mx-4
                            lg:mt-10 lg:mb-10 lg:mx-0
                           "
                style={{
                    backgroundColor: '#FFFCFC',
                    borderRadius: '12px',
                }}
            >
                <div className="w-full" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h3 className="text-[#373737] font-sans font-medium text-lg text-center mb-6"
                        style={{ fontSize: '18px', marginTop: '0', marginBottom: '24px' }}>
                        {commentsData.reduce((total, c) => total + 1 + (c.replies ? c.replies.length : 0), 0)} Comments
                    </h3>

                    {/* Divisor */}
                    <hr className="border-t border-[#DEDEDEF5] mb-6" />

                    {/* Renderização dos Comentários Principais e suas Respostas */}
                    <div className="space-y-6">
                        {commentsData.map(comment => (
                            // Div para o comentário pai e suas respostas
                            <div key={comment.id} className="border-b pb-4 last:border-b-0 last:pb-0 border-gray-200">
                                {/* Comentário Pai */}
                                <CommentItem comment={comment} />

                                {/* Respostas (se existirem) */}
                                {comment.replies && comment.replies.length > 0 && (
                                    <div className="mt-4 space-y-4">
                                        {comment.replies.map(reply => (
                                            <CommentItem key={reply.id} comment={reply} isReply={true} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Novo: Comentários Importados de Facebook */}
                    <div className="flex items-center justify-start mt-8 text-gray-500 text-sm">
                        {/* Ícone do Facebook SVG */}
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                        <span>Comments Imported from Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentsSection;