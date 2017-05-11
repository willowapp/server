import mongoose, {Schema} from 'mongoose';
import Post from './post'

var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post'
  },
  lastViewedActivityAt: {
    type: Schema.Types.Date
  }
},
{
  timestamps: true
});

export default mongoose.model('User', userSchema);