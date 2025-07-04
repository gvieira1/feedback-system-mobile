// src/navigation/types.ts
import { Feedback } from '../models/Feedback';

export type RootStackParamList = {
  Login: undefined;
  "Cadastre-se": undefined;
  ListMyFeedbacks: { feedbackSent?: boolean };
  ListAllFeedbacks: undefined;
  UserProfile: undefined;
  WriteFeedback: undefined;
  FeedbackDetail: { feedback: Feedback };
  FeedbackDetailAdmin: { feedback: Feedback };
};
